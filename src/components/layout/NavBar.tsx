import { AppBar, Avatar, Box, Toolbar, Typography } from '@mui/material'
import getBasicProfile from '../../../scripts/GetBasicProfile'

const NavBar = ({ children }: NavbarProps) => {
  let profileName = getBasicProfile()?.name
  let profileImageSrc = getBasicProfile()?.image

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          {children}
          <Typography
            variant="h6"
            component="div"
            align="right"
            sx={{
              flexGrow: 1,
              marginRight: 5,
            }}
          >
            {profileName}
          </Typography>
          <Avatar src={profileImageSrc || undefined} />
        </Toolbar>
      </AppBar>
    </Box>
  )
}

interface NavbarProps {
  children: React.ReactNode
}

export default NavBar
