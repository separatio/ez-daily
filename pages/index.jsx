import { Layout } from '../src/components'
import { getProviders } from 'next-auth/react'
import { SignInOptions } from '../src/components'

const Home = () => {
  return (
    <Layout>
      <SignInOptions />
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const providers = await getProviders()
  return {
    props: { providers },
  }
}


export default Home
