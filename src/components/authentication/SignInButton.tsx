import { signIn } from 'next-auth/react'
import { Button } from '@mui/material'

const SignInButton = () => {
  return (
    <div key='google'>
      <Button
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        onClick={() => signIn('google')}
      >
        Sign in with Google
      </Button>
    </div>
  )
}

export default SignInButton
