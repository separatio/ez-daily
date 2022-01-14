import type { NextPage } from 'next'

import { Typography } from '@mui/material'
import TeamList from '../src/components/teams/TeamList'
import { useSession } from 'next-auth/react'

const Teams: NextPage = () => {
  const { data: session, status } = useSession()

  //TODO: replace lists with db/gql query
  const memberList = [
    'Aleksandr',
    'Alex',
    'Andrei',
    'Denys',
    'Huy',
    'Ilya',
    'Kavitha',
    'Rafal',
    'Sergiu',
    'Timofei',
  ]
  const teamList = ['Staff Portal Tango']

  if (status === 'unauthenticated') {
    return <p>Access Denied</p>
  }

  return (
    <>
      <Typography variant="h2" align="center">
        {'Teams'}
      </Typography>

      {teamList.map((teamName) => {
        return (
          <TeamList
            key={teamName}
            teamName={teamName}
            memberList={memberList}
          />
        )
      })}
    </>
  )
}

export default Teams
