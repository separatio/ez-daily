import '../styles/index.css'
import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'
import { Layout } from '../src/components'
import CssBaseline from '@mui/material/CssBaseline'
import Head from 'next/head'
import { ThemeProvider } from '@mui/material/styles'
import theme from '../src/theme'
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "/api",
});

const DailyRoulette = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) => {
  return (
    <SessionProvider session={session} refetchInterval={5 * 60}>
      <Head>
        <title>Daily Roulette</title>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <ApolloProvider client={client}>
            <Component {...pageProps} />
          </ApolloProvider>
        </Layout>
      </ThemeProvider>
    </SessionProvider>
  )
}

export default DailyRoulette
