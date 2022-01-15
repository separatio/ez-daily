import { Input, InputLabel } from '@mui/material'
import { FormControl } from '@mui/material'

const AddTeamForm = () => {
  return (
    <FormControl
      sx={{
        minWidth: 226,
      }}
    >
      <InputLabel htmlFor="my-input">+ Add Team</InputLabel>
      <Input id="add-team" />
    </FormControl>
  )
}

export default AddTeamForm
