import { Typography } from '@mui/material'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <>
      <Typography
        variant="h2"
        align="center"
        sx={{
          color: 'text.secondary',
        }}
      >
        {'Welcome to Ez Daily!'}
      </Typography>

      <Typography
        variant="h5"
        align="center"
        sx={{
          color: 'text.secondary',
        }}
      >
        {'Please click the menu icon at the top left to get started'}
      </Typography>
    </>
  )
}

export default Home
