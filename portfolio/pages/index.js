import Link from 'next/link';
import Layout from '../app/components/Layout';
import s from '../app/styles/Home.module.css';


const services = [
  {
    name: 'Web development',
    text: 'Custom sites built from scratch: fast, responsive and easy for you to keep updated.',
    tools: 'Next.js, React, PHP, Node/Express, GraphQL, SQL',
  },
  {
    name: 'SEO and SEM',
    text: 'Keyword research, on-site SEO and Google Ads campaigns that send local customers to the pages that convert.',
    tools: 'Google Ads, Google Analytics, keyword research',
  },
  {
    name: 'Social media marketing',
    text: 'Channel management, content planning and video that supports your search strategy instead of competing with it.',
    tools: 'Content planning, YouTube, video editing',
  },
  {
    name: 'Data analytics',
    text: 'Dashboards and reports that show which pages, keywords and posts actually bring in customers.',
    tools: 'SQL, BigQuery, Looker Studio, Tableau, Power BI, Python',
  },
];

const work = [
  {
    name: 'Regional Landscaping Services',
    kind: 'Web development',
    text: 'Custom portfolio and contact site for a landscaping company in Folsom, CA.',
    stack: 'Next.js, CSS3, GraphQL',
    href: 'https://rlsgogreen.com',
  },
  {
    name: 'G&C Septic Services',
    kind: 'Web development',
    text: 'Custom informational site for a septic service in Wilton, CA.',
    stack: 'PHP, CSS3, Apache',
    href: 'https://gandcseptic.com',
  },
  {
    name: 'Acme Saw & Supply',
    kind: 'SEO and SEM',
    text: 'SEO and ad campaigns for a power tool retailer with stores from Placerville to Stockton. The site is no longer live.',
    stack: 'SEO, Google Ads, keyword research',
  },
  {
    name: 'Adventure RV Napa',
    kind: 'SEO and social media',
    text: 'On-site SEO for an RV dealership in Napa, CA, plus YouTube and social media management. The site is no longer live.',
    stack: 'On-site SEO, video editing, social media',
    href: 'https://www.youtube.com/@adventurervnapa/videos',
  },
];

const toolkit = [
  ['Development', 'HTML5, CSS3, JavaScript (ES6), React, Next.js, Node/Express, PHP, GraphQL, SQL, Git and GitHub'],
  ['Search', 'Keyword research, on-site SEO, Google Ads, Google Analytics'],
  ['Social', 'Channel management, content planning, YouTube, video editing'],
  ['Analytics', 'SQL, BigQuery, Looker Studio, Tableau, Power BI, Python, Excel'],
];

const certs = [
  'Google Business Intelligence Professional Certificate',
  'Google Data Analytics Certificate',
  'FreeCodeCamp: Responsive Web Design',
  'FreeCodeCamp: JavaScript Algorithms and Data Structures',
];

export default function Home() {
  return (
    <Layout
      title="Patrick Keating | Web Developer, SEO and Data Analytics"
      description="Custom websites, search and social media marketing, and analytics that show what’s working. Based in Citrus Heights, CA."
    >
      <section className={s.hero}>
        <div className={s.wrap}>
          <h1 className={s.h1}>I build websites, then make sure people find them.</h1>
          <p className={s.lead}>
            I’m Patrick, a web developer and digital marketer in Citrus Heights, CA. I handle the build, the search
            and social marketing, and the reporting, so every piece is designed to work together.
          </p>

          <div className={s.serp} role="img" aria-label="Mock search result for Patrick Keating">
            <div className={s.site}>
              <span className={s.fav} aria-hidden="true">PK</span>
              <div>
                <div className={s.siteName}>Patrick Keating</div>
                <div className={s.url}>keating916.vercel.app</div>
              </div>
            </div>
            <div className={s.title}>Patrick Keating | Web Developer, SEO and Data Analytics</div>
            <p className={s.snippet}>
              Custom websites, <mark>search</mark> and <mark>social media</mark> marketing, and reports that show
              what’s working. Based in Citrus Heights, CA.
            </p>
          </div>
          <div className={s.actions}>
            <a className={s.primary} href="#contact">Start a project</a>
            <a className={s.secondary} href="#work">See my work</a>
          </div>
        </div>
      </section>

      <section id="services" className={s.section}>
        <div className={s.wrap}>
          <h2 className={s.h2}>Services</h2>
          <div className={s.rows}>
            {services.map((x) => (
              <div key={x.name} className={s.row}>
                <h3 className={s.h3}>{x.name}</h3>
                <div>
                  <p>{x.text}</p>
                  <p className={s.meta}>{x.tools}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className={s.section}>
        <div className={s.wrap}>
          <h2 className={s.h2}>Selected work</h2>
          <div className={s.rows}>
            {work.map((w) => (
              <div key={w.name} className={s.row}>
                <div>
                  <h3 className={s.h3}>
                    {w.href ? (
                      <a className={s.plain} href={w.href} target="_blank" rel="noopener noreferrer">{w.name}</a>
                    ) : (
                      w.name
                    )}
                  </h3>
                  <p className={s.kind}>{w.kind}</p>
                </div>
                <div>
                  <p>{w.text}</p>
                  <p className={s.meta}>{w.stack}</p>
                </div>
              </div>
            ))}
          </div>
          <p className={s.more}>
            Looking for code samples? See my <Link href="/projects">little projects</Link> with live demos, or browse{' '}
            <a href="https://github.com/keating916" target="_blank" rel="noopener noreferrer">GitHub</a>.
          </p>
        </div>
      </section>

      <section className={s.section}>
        <div className={s.wrap}>
          <h2 className={s.h2}>Toolkit</h2>
          <dl className={s.tools}>
            {toolkit.map(([k, v]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className={s.section}>
        <div className={s.wrap}>
          <h2 className={s.h2}>About</h2>
          <p className={s.about}>
            I started programming in 2018 and became a web developer when a former employer needed help with his
            website. Since then I’ve built and marketed sites for local businesses, finished 600+ hours of
            FreeCodeCamp curriculum, and added analytics to the mix so I can show what’s working and say plainly
            when something isn’t.
          </p>
          <ul className={s.certs}>
            {certs.map((c) => <li key={c}>{c}</li>)}
          </ul>
        </div>
      </section>

      <section id="contact" className={`${s.section} ${s.contact}`}>
        <div className={s.wrap}>
          <h2 className={s.h2}>Let’s work together</h2>
          <p className={s.lead}>Need a new site, more search traffic, or clearer numbers? Tell me about your business.</p>
          <div className={s.actions}>
            <a className={s.primary} href="mailto:keating916@gmail.com?subject=Project%20inquiry">keating916@gmail.com</a>
            <a className={s.secondary} href="tel:9162970220">(916) 297-0220</a>
          </div>
          <p className={s.more}>
            <a href="https://www.linkedin.com/in/patrickkeating916" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            {' '}and{' '}
            <a href="https://github.com/keating916" target="_blank" rel="noopener noreferrer">GitHub</a>
          </p>
        </div>
      </section>
    </Layout>
  );
}
