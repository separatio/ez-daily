import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import { SignInOptions } from './authentication'

export default function Navbar({ children }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          {children}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Daily Roulette
          </Typography>
          <SignInOptions />
        </Toolbar>
      </AppBar>
    </Box>
  )
}
