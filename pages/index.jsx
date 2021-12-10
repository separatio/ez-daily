import { Layout } from '../src/components'
import { getProviders } from 'next-auth/react'

const Home = () => {
  return <Layout />
}

export async function getServerSideProps(context) {
  const providers = await getProviders()
  return {
    props: { providers },
  }
}

export default Home
