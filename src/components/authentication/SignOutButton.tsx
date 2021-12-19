import { signOut } from 'next-auth/react'
import { ListItem, ListItemIcon, ListItemText } from '@mui/material'
import LogoutIcon from '@mui/icons-material/Google'

const SignOutButton = () => {
  return (
    <ListItem button onClick={() => signOut()}>
      <ListItemIcon>
        <LogoutIcon
          sx={{
            color: 'white',
          }}
        />
      </ListItemIcon>
      <ListItemText primary="Sign Out" />
    </ListItem>
  )
}

export default SignOutButton
