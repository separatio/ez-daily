import { AppBar, Box, Toolbar } from '@mui/material'

const NavBar = ({ children }: NavbarProps) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>{children}</Toolbar>
      </AppBar>
    </Box>
  )
}

interface NavbarProps {
  children: React.ReactNode
}

export default NavBar
