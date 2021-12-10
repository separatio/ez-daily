import { useSession, signOut } from 'next-auth/react'
import { SignInButton } from '.'

const SignInOptions = ({ providers }) => {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return SignInButton()
}

SignInOptions.getInitialProps = async () => {
  return {
    providers: await providers(),
  }
}

export default SignInOptions
