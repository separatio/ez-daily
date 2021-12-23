import { useState } from 'react'
import Navbar from './Navbar'
import MenuIcon from '@mui/icons-material/Menu'
import {
  Box,
  IconButton,
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import Link from 'next/link'
import HomeIcon from '@mui/icons-material/Home'
import {SignOutButton, SignInButton } from '../components/authentication'
import { useSession } from 'next-auth/react'

export default function LeftSideDrawer() {
  const [state, setState] = useState(Boolean)
  const { data: session } = useSession()

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

  const list = () => (
    <Box
      sx={{
        width: 250,
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <Link href="/" passHref>
          <ListItem button>
            <ListItemIcon>
              <HomeIcon
                sx={{
                  color: 'white',
                }}
              />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
        </Link>

        <Link href="/daily" passHref>
          <ListItem button>
            <ListItemIcon>
              <PlayArrowIcon
                sx={{
                  color: 'white',
                }}
              />
            </ListItemIcon>
            <ListItemText primary="Start Daily" />
          </ListItem>
        </Link>

        <Link href="/teams" passHref>
          <ListItem button>
            <ListItemIcon>
              <PeopleAltIcon
                sx={{
                  color: 'white',
                }}
              />
            </ListItemIcon>
            <ListItemText primary="Teams" />
          </ListItem>
        </Link>

        <Divider
          component="li"
          variant="fullWidth"
          sx={{
            paddingTop: 5,
            borderBlockColor: 'white',
          }}
        />
        <li>
          <Typography
            sx={{ mt: 0.5, ml: 2 }}
            color="text.primary"
            display="block"
            variant="caption"
          >
            Account
          </Typography>
        </li>

        {session ? <SignOutButton /> : <SignInButton />}
      </List>
    </Box>
  )

  return (
    <>
      <Navbar>
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
      </Navbar>

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
        {list()}
      </Drawer>
    </>
  )
}
