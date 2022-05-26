import { AppBar, Box, Toolbar } from '@mui/material'
import Profile from './Profile'

const NavBar = ({ children }: NavbarProps) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          {children}
          <Profile />
        </Toolbar>
      </AppBar>
    </Box>
  )
}

interface NavbarProps {
  children: React.ReactNode
}

export default NavBar
