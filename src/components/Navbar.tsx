import { AppBar, Box, Toolbar, Typography } from '@mui/material'

export default function Navbar({ children }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          {children}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Daily Roulette
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
