import type { GetServerSideProps, NextPage } from 'next'

import { Grid, Typography } from '@mui/material'
import TeamList from '../src/components/teams/TeamList'
import { useSession } from 'next-auth/react'
import AddTeamButton from '../src/components/teams/AddTeamForm'

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

      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
        columnSpacing={2}
      >
        {teamList.map((teamName) => {
          return (
            <Grid item key={teamName}>
              <TeamList teamName={teamName} memberList={memberList} />
            </Grid>
          )
        })}

        <Grid item>
          <AddTeamButton />
        </Grid>
      </Grid>
    </>
  )
}

export default Teams
