import { signOut } from 'next-auth/react'
import Button from '@mui/material/Button'

const SignOutButton = () => {
  return (
    <div key="google">
      <Button
        variant="contained"
        align="center"
        sx={{ mt: 3, mb: 2 }}
        onClick={() => signOut()}
      >
        Sign Out
      </Button>
    </div>
  )
}

export default SignOutButton
