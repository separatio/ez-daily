import type { NextPage } from 'next'

import { List } from '@mui/material'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Paper from '@mui/material/Paper'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import People from '@mui/icons-material/People'
import PermMedia from '@mui/icons-material/PermMedia'
import Dns from '@mui/icons-material/Dns'
import Public from '@mui/icons-material/Public'
import PeopleIcon from '@mui/icons-material/People'
import EditIcon from '@mui/icons-material/Edit'

const data = [
  { icon: <People />, label: 'Authentication' },
  { icon: <Dns />, label: 'Database' },
  { icon: <PermMedia />, label: 'Storage' },
  { icon: <Public />, label: 'Hosting' },
]

const Teams: NextPage = () => {
  const teams = ['Test Team 1', 'Test Team 2']

  return (
    <List
      sx={{
        display: 'grid',
        justifyContent: 'center',
      }}
    >
      <Paper
        sx={{
          backgroundColor: 'primary.main',
        }}
      >
        {teams.map((teamName: string) => {
          return (
            <ListItem disablePadding key={teamName}>
              <ListItemButton>
                <ListItemText primary={teamName} />
              </ListItemButton>
              <Tooltip title="Edit Team name">
                <IconButton sx={{ color: 'white' }}>
                  <EditIcon />
                </IconButton>
              </Tooltip>

              <Tooltip title="Edit Team members">
                <IconButton sx={{ color: 'white' }}>
                  <PeopleIcon />
                </IconButton>
              </Tooltip>
            </ListItem>
          )
        })}

        <ListItem disablePadding>
          <ListItemText>Test</ListItemText>
        </ListItem>
      </Paper>
    </List>
  )
}

export default Teams
