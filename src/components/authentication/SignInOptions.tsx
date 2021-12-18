import { useSession } from 'next-auth/react'
import SignInButton from './SignInButton'
import SignOutButton from './SignOutButton'

const SignInOptions = () => {
  const { data: session } = useSession()
  if (session)
    return <SignOutButton />
  return <SignInButton />
}

export default SignInOptions
