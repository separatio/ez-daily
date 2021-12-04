import '../styles/index.css'
import { SessionProvider } from 'next-auth/react'

export default function DailyFacilitator({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session} refetchInterval={5 * 60}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}
