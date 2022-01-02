import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  Divider,
  ListItemAvatar,
  Avatar,
} from '@mui/material'
import TeamListSubHeader from './TeamListSubHeader'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import EngineeringIcon from '@mui/icons-material/Engineering'
import Link from 'next/link'

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
            <ListItem key={teamMemberName}>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: 'secondary.main' }}>
                  <EngineeringIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={teamMemberName} />
            </ListItem>
          )
        })}

        <Divider color="black" />

        <Link href="/daily" passHref>
          <ListItemButton>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: 'secondary.main' }}>
                <PlayArrowIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Start the daily!" />
          </ListItemButton>
        </Link>
      </Paper>
    </List>
  )
}

interface TeamListProps {
  teamName: string
  memberList: string[]
}

export default TeamList
