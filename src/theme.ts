import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  spacing: 4,
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#15599e',
    },
    text: {
      primary: '#ffffff',
      secondary: '#1976d2',
    },
    background: {
      default: '#ffffff',
    },
  },
  components: {
    MuiSvgIcon: {
      defaultProps: {
        sx: { color: 'white' },
      },
    },
  },
})

export default theme
