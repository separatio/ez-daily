import { Box, List, Divider, Typography } from '@mui/material'
import { SignOutButton, SignInButton } from './authentication'
import SideBarItem from './SideBarItem'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import HomeIcon from '@mui/icons-material/Home'
import { useSession } from 'next-auth/react'

const linksList = [
  {
    href: '/',
    icon: (
      <HomeIcon
        sx={{
          color: 'white',
        }}
      />
    ),
    text: 'Home',
  },
  {
    href: '/daily',
    icon: (
      <PlayArrowIcon
        sx={{
          color: 'white',
        }}
      />
    ),
    text: 'Start Daily',
  },
  {
    href: '/teams',
    icon: (
      <PeopleAltIcon
        sx={{
          color: 'white',
        }}
      />
    ),
    text: 'Teams',
  },
]

const SideBarList = () => {
  const { data: session } = useSession()

  return (
    <List>
      {linksList.map((item) => {
        return (
          <SideBarItem
            key={linksList.indexOf(item)}
            href={item.href}
            icon={item.icon}
            text={item.text}
          />
        )
      })}

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
  )
}

export default SideBarList
