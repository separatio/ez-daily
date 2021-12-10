import { useSession } from 'next-auth/react'
import { SignInButton } from '.'
import { SignOutButton } from '.'

const SignInOptions = () => {
  const { data: session } = useSession()
  if (session)
    return (<SignOutButton />)
  return <SignInButton />
}

export default SignInOptions
