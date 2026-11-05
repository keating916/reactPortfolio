import { useRef, useState } from 'react';
import Link from 'next/link';
import Layout from '../app/components/Layout';
import { Calculator, EtchASketch, GoogleHome, QuoteGenerator, RockPaperScissors } from '../app/components/Demos';
import s from '../app/styles/Projects.module.css';

const projects = [
  {
    name: 'Calculator',
    text: 'A browser calculator built with React state and no eval(). Chains operations and handles divide by zero.',
    tags: ['React', 'State management'],
    Demo: Calculator,
  },
  {
    name: 'Quote generator',
    text: 'Pulls a random quote from a public API and handles loading and error states.',
    tags: ['JavaScript', 'REST API', 'fetch'],
    Demo: QuoteGenerator,
  },
  {
    name: 'Etch-a-Sketch',
    text: 'A 16 by 16 drawing grid with a color picker, built on pointer events so it works with a mouse or a finger.',
    tags: ['React', 'DOM events', 'CSS Grid'],
    Demo: EtchASketch,
  },
  {
    name: 'Rock Paper Scissors',
    text: 'Play the computer and keep score. My first real logic project.',
    tags: ['JavaScript', 'Game logic'],
    Demo: RockPaperScissors,
  },
  {
    name: 'Google home page',
    text: 'A reproduction of the Google home page, with a working search box.',
    tags: ['HTML', 'CSS', 'Layout'],
    Demo: GoogleHome,
  },
];

export default function Projects() {
  const dialog = useRef(null);
  const [open, setOpen] = useState(null);

  const show = (p) => {
    setOpen(p);
    dialog.current.showModal();
  };
  const close = () => dialog.current.close();

  return (
    <Layout
      title="Little projects | Patrick Keating"
      description="Small interactive coding projects built with React and JavaScript, each with a live demo."
    >
      <div className={s.wrap}>
        <h1 className={s.h1}>Little projects</h1>
        <p className={s.lead}>
          Small builds I use to practice. Each one opens as a live demo. For client work, see{' '}
          <Link href="/#work">selected work</Link>.
        </p>

        <ul className={s.grid}>
          {projects.map((p) => (
            <li key={p.name} className={s.tile}>
              <h2 className={s.h2}>{p.name}</h2>
              <p className={s.text}>{p.text}</p>
              <ul className={s.tags}>
                {p.tags.map((t) => <li key={t}>{t}</li>)}
              </ul>
              <button className={s.open} onClick={() => show(p)}>Open demo</button>
            </li>
          ))}
        </ul>
      </div>

      <dialog
        ref={dialog}
        className={s.dialog}
        onClose={() => setOpen(null)}
        onClick={(e) => { if (e.target === dialog.current) close(); }}
        aria-label={open ? open.name : 'Demo'}
      >
        {open && (
          <>
            <div className={s.dHead}>
              <h2 className={s.h2}>{open.name}</h2>
              <button className={s.close} onClick={close}>Close</button>
            </div>
            <open.Demo />
          </>
        )}
      </dialog>
    </Layout>
  );
}
