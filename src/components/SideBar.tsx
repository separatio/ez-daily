import { useState } from 'react'
import NavBar from './NavBar'
import MenuIcon from '@mui/icons-material/Menu'
import { Box, IconButton, Drawer } from '@mui/material'
import SideBarList from './SideBarList'

export default function SideBar() {
  const [state, setState] = useState(Boolean)

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return
      }

      setState(open)
    }

  return (
    <>
      <NavBar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
      </NavBar>

      <Drawer
        anchor="left"
        open={state}
        onClose={toggleDrawer(false)}
        variant="temporary"
        PaperProps={{
          sx: {
            backgroundColor: 'primary.main',
          },
        }}
      >
        <Box
          sx={{
            width: 250,
          }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <SideBarList />
        </Box>
      </Drawer>
    </>
  )
}
