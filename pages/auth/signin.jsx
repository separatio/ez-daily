import { getProviders } from 'next-auth/react'
import Layout from '../../src/components/Layout'
import SignInButton from '../../src/components/SignInButton'

export default function SignIn({ providers }) {
  return (
    <Layout>
      {Object.values(providers).map((provider) => {
        return SignInButton(provider)
      })}
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const providers = await getProviders()
  return {
    props: { providers },
  }
}
