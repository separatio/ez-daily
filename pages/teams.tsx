import { Input, Box } from '@mui/material'
import { AccountCircle } from '@mui/icons-material'
import type { NextPage } from 'next'

const ariaLabel = { 'aria-label': 'description' };

const Teams: NextPage = () => {
  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <Input id="input-with-sx" placeholder="Team member" inputProps={ariaLabel} />
      </Box>
    </>
  )
}

export default Teams
