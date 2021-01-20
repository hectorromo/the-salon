import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from 'styles/Global';
import { theme } from 'styles/theme';

export default function App({ Component, pageProps }) {
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
