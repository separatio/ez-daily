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
    </ListSubheader>
  )
}

export default TeamListSubHeader

interface ListSubHeaderProps {
  teamName: string
}
