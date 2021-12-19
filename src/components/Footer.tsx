import { Typography, Link } from '@mui/material'

const Copyright = (props) => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      <Link color="inherit" href="">
        Daily Roulette
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

export default function Footer() {
  return (
    <footer>
      <Copyright />
    </footer>
  )
}
