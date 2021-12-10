import { signOut } from 'next-auth/react'
import Button from '@mui/material/Button'

const SignInButton = (provider) => {
  return (
    <div key={provider.name}>
      <Button
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        onClick={() => signOut(provider.id)}
      >
        Sign out
      </Button>
    </div>
  )
}

export default SignInButton
