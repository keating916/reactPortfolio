import { Bricolage_Grotesque, IBM_Plex_Sans } from 'next/font/google';
import '../app/styles/globals.css';

const display = Bricolage_Grotesque({ subsets: ['latin'], variable: '--font-display' });
const body = IBM_Plex_Sans({ subsets: ['latin'], weight: ['400', '600'], variable: '--font-body' });


export default function App({ Component, pageProps }) {
  return (
    <div className={`${display.variable} ${body.variable}`}>
      <Component {...pageProps} />
    </div>
  )
}