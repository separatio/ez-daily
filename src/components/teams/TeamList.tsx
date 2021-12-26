import MembersList from './MembersList'

import {
  List,
  TextField,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  IconButton,
  Tooltip,
} from '@mui/material'
import { People, Edit } from '@mui/icons-material'
import PropTypes from 'prop-types'

const TeamList = ({ memberList }) => {
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
        {memberList.map((teamName: string) => {
          return (
            <ListItem disablePadding key={teamName}>
              <ListItemButton>
                <ListItemText primary={teamName} />
              </ListItemButton>
              <Tooltip title="Edit Team name">
                <IconButton sx={{ color: 'white' }}>
                  <Edit />
                </IconButton>
              </Tooltip>

              <Tooltip title="Edit Team members">
                <IconButton sx={{ color: 'white' }}>
                  <People />
                </IconButton>
              </Tooltip>
            </ListItem>
          )
        })}

        <TextField
          id="standard-basic"
          label="Standard"
          variant="standard"
          sx={{
            color: 'white',
            borderColor: 'white',
          }}
        />
      </Paper>
    </List>
  )
}

TeamList.propTypes = {
  memberList: PropTypes.arrayOf(PropTypes.string),
}

export default TeamList
