import Footer from './Footer'
import Appbar from './Appbar'
import { Box } from '@mui/material'

export default function Page({ children }) {
  return (
    <Box sx={{ display: 'flex' }}>
      <Appbar />
      <main>{children}</main>
      <Footer />
    </Box>
  )
}
