import type { NextPage } from 'next'

import { Typography } from '@mui/material'
import TeamList from '../src/components/TeamList'

const Teams: NextPage = () => {
  const memberList = ['Test Team 1', 'Test Team 2']

  return (
    <>
      <Typography variant="h2" align="center">
        {'Teams'}
      </Typography>

      <TeamList memberList={memberList} />
    </>
  )
}

export default Teams
