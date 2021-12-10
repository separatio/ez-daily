import { useSession } from 'next-auth/react'
import Head from 'next/head'

export default function Header({ title = 'Daily Facilitator' }) {
  const { data: session, status } = useSession()
  const loading = status === 'loading'

  return (
    <header>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className="container-fluid header">
        <h1 className="title">Welcome to the Daily Roulette!</h1>
      </div>
    </header>
  )
}
