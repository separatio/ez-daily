import { signIn } from 'next-auth/react'
import { ListItem, ListItemIcon, ListItemText } from '@mui/material'
import GoogleIcon from '@mui/icons-material/Google'

const SignInButton = () => {
  return (
    <ListItem button onClick={() => signIn('google')}>
      <ListItemIcon>
        <GoogleIcon />
      </ListItemIcon>
      <ListItemText primary="Sign In with Google" />
    </ListItem>
  )
}

export default SignInButton
