import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from 'styles/global';
import { theme } from 'styles/theme';

interface Props {
  Component: any;
  pageProps: any;
}

export default function App({ Component, pageProps }: Props) {
  return (
    <>
      <Head>
        <title>The Salon</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
