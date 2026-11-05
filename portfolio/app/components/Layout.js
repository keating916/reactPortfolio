import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import s from './Layout.module.css';

const links = [
  { href: '/#services', label: 'Services' },
  { href: '/#work', label: 'Work' },
  { href: '/projects', label: 'Little projects' },
  { href: '/#contact', label: 'Contact' },
];

export default function Layout({ title, description, children }) {
  const { pathname } = useRouter();
  return (
    <div className={s.shell}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <header className={s.bar}>
        <div className={s.inner}>
          <Link href="/" className={s.brand}>Patrick Keating</Link>
          <nav aria-label="Main" className={s.nav}>
            {links.map((l) => (
              <Link key={l.href} href={l.href} aria-current={pathname === l.href ? 'page' : undefined}>
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      <main>{children}</main>
      <footer className={s.foot}>
        <div className={s.inner}>
          <span>© {new Date().getFullYear()} Patrick Keating, Citrus Heights, CA</span>
          <span className={s.footLinks}>
            <a href="https://github.com/keating916" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="/files/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
          </span>
        </div>
      </footer>
    </div>
  );
}
