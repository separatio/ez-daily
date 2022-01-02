import type { NextPage } from 'next'

import { Typography } from '@mui/material'
import TeamList from '../src/components/teams/TeamList'

const Teams: NextPage = () => {
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
