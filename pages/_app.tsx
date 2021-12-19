import '../styles/index.css'
import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'
import { Page } from '../src/components'
import CssBaseline from '@mui/material/CssBaseline'
import Head from 'next/head'
import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#2ec5d3',
    },
    text: {
      primary: '#ffffff',
    },
    background: {
      default: '#3498db',
    },
  },
})

export default function DailyFacilitator({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SessionProvider session={session} refetchInterval={5 * 60}>
        <Head>
          <title>Daily Facilitator</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta
            name="description"
            content="The Daily app for your Daily needs"
          />
        </Head>

        <Page>
          <Component {...pageProps} />
        </Page>
      </SessionProvider>
    </ThemeProvider>
  )
}
