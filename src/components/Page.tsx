import { Box } from '@mui/material'
import { Footer, Appbar, ActionsDrawer } from '.'

export default function Page({ children }) {
  return (
    <Box sx={{ display: 'flex' }}>
      <Appbar />
      <ActionsDrawer />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
        }}
      >
        <main>{children}</main>
      </Box>
      <Footer />
    </Box>
  )
}
