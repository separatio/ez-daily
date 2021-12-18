import { signOut } from 'next-auth/react'
import { Button } from '@mui/material'

const SignOutButton = () => {
  return (
    <div key="google">
      <Button
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        onClick={() => signOut()}
      >
        Sign Out
      </Button>
    </div>
  )
}

export default SignOutButton
