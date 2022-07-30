import '../styles/index.css'
import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'
import { Layout } from '../src/components'
import CssBaseline from '@mui/material/CssBaseline'
import Head from 'next/head'
import { ThemeProvider } from '@mui/material/styles'
import theme from '../src/theme'
import { SWRConfig } from 'swr'
import fetcher from '../lib/fetch'

const EzDaily = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) => {
  return (
    <SessionProvider session={session} refetchInterval={5 * 60}>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Ez Daily</title>
      </Head>
      <ThemeProvider theme={theme}>
        <SWRConfig
          value={{
            refreshInterval: 3000,
            fetcher: fetcher
          }}
        >
          <CssBaseline />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SWRConfig>
      </ThemeProvider>
    </SessionProvider>
  )
}

export default EzDaily
