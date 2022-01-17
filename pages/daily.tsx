import { Button, Grid, Typography } from '@mui/material'
import type { NextPage } from 'next'
import { useState } from 'react'
import { useSession } from 'next-auth/react'

let memberList = [
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

function selectTeamMember() {
  let member = ''

  const membersListLength = memberList.length
  const randomTeamMember = Math.floor(Math.random() * membersListLength)

  if (membersListLength === 0) return 'Done!'
  else {
    member = memberList[randomTeamMember]
    memberList.splice(randomTeamMember, 1)

    return member
  }
}

const Daily: NextPage = () => {
  const { data: session, status } = useSession()
  const [teamMember, setTeamMember] = useState("Let's start!")

  if (status === 'unauthenticated') {
    return <p>Access Denied</p>
  }

  return (
    <Grid
      container
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
      rowSpacing={10}
      sx={{
        paddingTop: '10rem',
      }}
    >
      {' '}
      <Button
        variant="contained"
        sx={{
          fontSize: '5rem',
          text-transform: none;
        }}
        onClick={() => {
          setTeamMember((teamMember) => {
            return selectTeamMember()
          })
        }}
      >
        Daily Roulette!
      </Button>{' '}
      <Typography
        sx={{
          fontSize: '5rem',
        }}
      >
        <h1>{teamMember}</h1>
      </Typography>
    </Grid>
  )
}

export default Daily
