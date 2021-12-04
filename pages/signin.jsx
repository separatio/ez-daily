import { providers, signIn } from 'next-auth/client'
import Layout from '../components/Layout'

export default function SignIn({ providers }) {
  return (
    <Layout>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button onClick={() => signIn(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </Layout>
  )
}

SignIn.getInitialProps = async () => {
  return {
    providers: await providers(),
  }
}
