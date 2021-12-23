import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import NextLink from 'next/link'
import { Link as MUILink } from '@mui/material'

export default function NavBar({ children }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          {children}
          <Typography align="center" variant="h6" sx={{ flexGrow: 1 }}>
            <NextLink href="/" passHref>
              <MUILink color="inherit" underline="none">
                Daily Roulette
              </MUILink>
            </NextLink>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
