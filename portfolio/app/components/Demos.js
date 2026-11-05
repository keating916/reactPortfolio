import { useCallback, useEffect, useState } from 'react';
import s from './Demos.module.css';

/* Rock Paper Scissors */
const MOVES = ['Rock', 'Paper', 'Scissors'];

export function RockPaperScissors() {
  const [score, setScore] = useState({ you: 0, cpu: 0 });
  const [msg, setMsg] = useState('Pick a move to start.');

  const play = (i) => {
    const c = Math.floor(Math.random() * 3);
    const r = (i - c + 3) % 3; // 0 tie, 1 win, 2 loss
    const text = `You played ${MOVES[i]}, the computer played ${MOVES[c]}.`;
    if (r === 0) setMsg(`${text} Tie.`);
    else if (r === 1) {
      setMsg(`${text} You win.`);
      setScore((x) => ({ ...x, you: x.you + 1 }));
    } else {
      setMsg(`${text} Computer wins.`);
      setScore((x) => ({ ...x, cpu: x.cpu + 1 }));
    }
  };

  return (
    <div>
      <p className={s.score}>You {score.you} : {score.cpu} Computer</p>
      <div className={s.btnRow}>
        {MOVES.map((m, i) => (
          <button key={m} className={s.btn} onClick={() => play(i)}>{m}</button>
        ))}
      </div>
      <p className={s.msg} aria-live="polite">{msg}</p>
    </div>
  );
}

/* Calculator */
const fmt = (n) => (Number.isFinite(n) ? String(parseFloat(n.toPrecision(12))) : 'Error');
const calc = (a, b, o) => (o === '+' ? a + b : o === '-' ? a - b : o === '*' ? a * b : b === 0 ? NaN : a / b);

export function Calculator() {
  const [disp, setDisp] = useState('0');
  const [acc, setAcc] = useState(null);
  const [op, setOp] = useState(null);
  const [fresh, setFresh] = useState(true);

  const digit = (d) => {
    if (d === '.' && !fresh && disp.includes('.')) return;
    setDisp(fresh ? (d === '.' ? '0.' : d) : disp === '0' && d !== '.' ? d : disp + d);
    setFresh(false);
  };
  const operate = (o) => {
    if (disp === 'Error') return;
    const cur = parseFloat(disp);
    if (op && !fresh) {
      const r = calc(acc, cur, op);
      setAcc(r);
      setDisp(fmt(r));
    } else if (!op) setAcc(cur);
    setOp(o);
    setFresh(true);
  };
  const equals = () => {
    if (!op || disp === 'Error') return;
    setDisp(fmt(calc(acc, parseFloat(disp), op)));
    setAcc(null);
    setOp(null);
    setFresh(true);
  };
  const clear = () => { setDisp('0'); setAcc(null); setOp(null); setFresh(true); };
  const back = () => {
    if (fresh) return;
    setDisp(disp.length > 1 ? disp.slice(0, -1) : '0');
  };

  const keys = [
    ['C', clear, 'fn'], ['⌫', back, 'fn'], ['÷', () => operate('/'), 'op'], ['×', () => operate('*'), 'op'],
    ['7'], ['8'], ['9'], ['−', () => operate('-'), 'op'],
    ['4'], ['5'], ['6'], ['+', () => operate('+'), 'op'],
    ['1'], ['2'], ['3'], ['=', equals, 'eq'],
    ['0', null, 'wide'], ['.', null, 'wide'],
  ];

  return (
    <div className={s.calc}>
      <output className={s.display} aria-live="polite">{disp}</output>
      <div className={s.keys}>
        {keys.map(([label, fn, kind]) => (
          <button
            key={label}
            className={`${s.key} ${kind ? s[kind] : ''}`}
            onClick={fn || (() => digit(label))}
            aria-label={label === '⌫' ? 'Backspace' : label === 'C' ? 'Clear' : undefined}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}

/* Etch-a-Sketch */
const N = 16;

export function EtchASketch() {
  const [color, setColor] = useState('#1a56c4');
  const [cells, setCells] = useState(() => Array(N * N).fill(null));

  const paint = (e) => {
    if (e.buttons !== 1) return;
    const el = document.elementFromPoint(e.clientX, e.clientY);
    const i = el && el.dataset ? el.dataset.i : undefined;
    if (i === undefined) return;
    setCells((c) => {
      if (c[i] === color) return c;
      const n = c.slice();
      n[i] = color;
      return n;
    });
  };

  return (
    <div>
      <div className={s.etchTools}>
        <label>
          Color <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
        </label>
        <button className={s.btn} onClick={() => setCells(Array(N * N).fill(null))}>Clear drawing</button>
      </div>
      <div className={s.etch} onPointerDown={paint} onPointerMove={paint}>
        {cells.map((c, i) => (
          <div key={i} data-i={i} className={s.cell} style={c ? { background: c } : undefined} />
        ))}
      </div>
      <p className={s.hint}>Hold the mouse button or your finger down and drag to draw.</p>
    </div>
  );
}

/* Random quote generator (public quotes API) */
export function QuoteGenerator() {
  const [quote, setQuote] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    setError(false);
    try {
      const res = await fetch('https://dummyjson.com/quotes/random');
      if (!res.ok) throw new Error('Bad response');
      setQuote(await res.json());
    } catch {
      setError(true);
    }
    setLoading(false);
  }, []);

  useEffect(() => { load(); }, [load]);

  return (
    <div>
      <div className={s.quote} aria-live="polite">
        {error && <p>Couldn’t load a quote. Check your connection and try again.</p>}
        {!error && quote && (
          <>
            <p className={s.qText}>“{quote.quote}”</p>
            <p className={s.qBy}>{quote.author}</p>
          </>
        )}
        {!error && !quote && <p>Loading…</p>}
      </div>
      <button className={s.btn} onClick={load} disabled={loading}>{loading ? 'Loading…' : 'New quote'}</button>
    </div>
  );
}

/* Google home page replica */
const logo = [['G', '#4285f4'], ['o', '#ea4335'], ['o', '#fbbc05'], ['g', '#4285f4'], ['l', '#34a853'], ['e', '#ea4335']];

export function GoogleHome() {
  return (
    <div className={s.g}>
      <div className={s.gNav}>
        <a href="https://about.google" target="_blank" rel="noopener noreferrer">About</a>
        <a href="https://store.google.com" target="_blank" rel="noopener noreferrer">Store</a>
        <a href="https://mail.google.com" target="_blank" rel="noopener noreferrer">Gmail</a>
        <a href="https://www.google.com/imghp" target="_blank" rel="noopener noreferrer">Images</a>
      </div>
      <div className={s.gMain}>
        <div className={s.gLogo} aria-label="Google">
          {logo.map(([ch, col], i) => <span key={i} style={{ color: col }}>{ch}</span>)}
        </div>
        <form action="https://www.google.com/search" method="get" target="_blank">
          <input className={s.gInput} name="q" type="search" aria-label="Search" autoComplete="off" />
          <div className={s.btnRow}>
            <button className={s.gBtn} type="submit">Google Search</button>
            <button className={s.gBtn} type="submit" name="btnI" value="1">I’m Feeling Lucky</button>
          </div>
        </form>
      </div>
    </div>
  );
}
