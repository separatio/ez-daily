import { Typography, Link } from '@mui/material'

const Copyright = () => {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="">
        Daily Roulette
      </Link>{' '}
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
