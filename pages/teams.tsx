import type { GetServerSideProps, NextPage } from 'next'

import { Grid, Typography } from '@mui/material'
import TeamList from '../src/components/teams/TeamList'
import { useSession } from 'next-auth/react'
import AddTeamButton from '../src/components/teams/AddTeamForm'
import useSWR from 'swr'
import { Team } from '@prisma/client'

const Teams: NextPage = () => {
  const { data: session } = useSession()

  const { data, error } = useSWR('/api/teams')

  if (!session) {
    return <p>Access Denied</p>
  }

  if (error) return <div>Failed to load teams</div>
  if (!data) return <div>Loading...</div>

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
        {data.map((team: Team) => {
          return (
            <Grid item key={team.title}>
              <TeamList teamName={team.title} memberList={team.members} />
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
