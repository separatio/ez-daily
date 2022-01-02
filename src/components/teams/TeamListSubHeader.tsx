import { IconButton, Tooltip, ListSubheader } from '@mui/material'
import { People, Edit } from '@mui/icons-material'

const TeamListSubHeader = ({ teamName }: ListSubHeaderProps) => {
  return (
    <ListSubheader
      component="div"
      id="nested-list-subheader"
      sx={{
        backgroundColor: 'secondary.main',
        color: 'text.primary',
      }}
    >
      {teamName}
      <Tooltip title="Edit Team name">
        <IconButton>
          <Edit />
        </IconButton>
      </Tooltip>

      <Tooltip title="Edit Team members">
        <IconButton>
          <People />
        </IconButton>
      </Tooltip>
    </ListSubheader>
  )
}

export default TeamListSubHeader

interface ListSubHeaderProps {
  teamName: string
}
