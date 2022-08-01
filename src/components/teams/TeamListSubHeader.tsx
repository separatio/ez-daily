import { ListSubheader } from '@mui/material'
import EditableField from '../EditableField'
import { mutate } from 'swr'
import Router from 'next/router'

const TeamListSubHeader = ({ teamName }: ListSubHeaderProps) => {
  const handleRequest = async (
    e: React.SyntheticEvent,
    newTeamName: string
  ) => {
    e.preventDefault()

    try {
      const body = { newTeamName, teamName }
      await fetch(`/api/team`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      await Router.push('/teams')
    } catch (error) {
      console.error(error)
    }

    mutate('/api/teams')
  }

  return (
    <ListSubheader
      component="div"
      id="nested-list-subheader"
      sx={{
        backgroundColor: 'secondary.main',
        color: 'text.primary',
        padding: '0',
      }}
    >
      <EditableField initialValue={teamName} updateRequest={handleRequest} />
    </ListSubheader>
  )
}

export default TeamListSubHeader

interface ListSubHeaderProps {
  teamName: string
}
