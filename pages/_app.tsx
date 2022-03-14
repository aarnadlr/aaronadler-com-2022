import {
  FC,
  useState,
  createContext,
  Dispatch,
  useMemo,
  useContext,
} from 'react';
import Head from 'next/head';
import '@/styles/style.css';
import type { AppProps } from 'next/app';
import { ThemeContext } from '../Components/ThemeContext';

export default function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<string>('light');
  // memoize the context value
  const value = useMemo(() => ({ theme, setTheme }), [theme]);

  return (
    <>
      <ThemeContext.Provider value={value}>
        <Head>
          <meta name="viewport" content="viewport-fit=cover" />
        </Head>
        <Component {...pageProps} />
      </ThemeContext.Provider>
    </>
  );
}
