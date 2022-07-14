import { Typography, Link as MUILink } from '@mui/material'
import Link from 'next/link'

const Copyright = () => {
  return (
    <Typography color='text.secondary' align="center">
      {'Copyright © '}
      <Link href='/' passHref>
        <MUILink>
          Daily Roulette
        </MUILink>
      </Link>
      {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const Footer = () => {
  return (
    <footer>
      <Copyright />
    </footer>
  )
}

export default Footer
