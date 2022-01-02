import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  IconButton,
  Tooltip,
  Divider,
} from '@mui/material'
import { People, Edit } from '@mui/icons-material'
import TeamListSubHeader from './TeamListSubHeader'

const TeamList = ({ teamName, memberList }: TeamListProps) => {
  return (
    <List
      sx={{
        display: 'grid',
        justifyContent: 'center',
      }}
      subheader={<TeamListSubHeader teamName={teamName} />}
    >
      <Paper
        sx={{
          backgroundColor: 'primary.main',
        }}
      >
        {memberList.map((teamMemberName: string) => {
          return (
            <ListItem disablePadding key={teamMemberName}>
              <ListItemButton>
                <ListItemText primary={teamMemberName} />
              </ListItemButton>
            </ListItem>
          )
        })}

        <Divider color="black" />

        <ListItem>{'Start the daily!'}</ListItem>
      </Paper>
    </List>
  )
}

interface TeamListProps {
  teamName: string
  memberList: string[]
}

export default TeamList
