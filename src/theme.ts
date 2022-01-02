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
    },
    background: {
      default: '#3498db',
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
