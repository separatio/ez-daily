import { signIn } from 'next-auth/react'
import Button from '@mui/material/Button'

const SignInButton = (provider) => {
  return (
    <div key={provider.name}>
      <Button
        variant="contained"
        align="center"
        sx={{ mt: 3, mb: 2 }}
        onClick={() => signIn(provider.id)}
      >
        Sign in with {provider.name}
      </Button>
    </div>
  )
}

export default SignInButton
