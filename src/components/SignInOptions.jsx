import { useSession, signIn, signOut } from 'next-auth/react'
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
  return (
    <>
      {Object.values(providers).map((provider) => {
        return SignInButton(provider)
      })}
    </>
  )
}

export default SignInOptions
