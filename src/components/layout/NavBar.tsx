import { AppBar, Box, Toolbar } from '@mui/material'

const NavBar = ({ children }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>{children}</Toolbar>
      </AppBar>
    </Box>
  )
}

export default NavBar
