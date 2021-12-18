import Head from 'next/head'

export default function Header({ title = 'Daily Facilitator' }) {
  return (
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content="The Daily app for your Daily needs" />
    </Head>
  )
}
