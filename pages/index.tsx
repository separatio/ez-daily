import { Typography } from '@mui/material'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return <>
    <Typography variant='h2' align='center'>
      {'Welcome to the Daily Roulette!'}
    </Typography>

    <Typography variant='h5' align='center' >
      {'Please click the menu icon at the top left to get started'}
    </Typography>
  </>
}

export default Home
