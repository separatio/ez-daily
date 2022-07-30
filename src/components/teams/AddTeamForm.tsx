import { Input, InputLabel } from '@mui/material'
import { FormControl } from '@mui/material'
import Router from 'next/router'
import { useState } from 'react'

const AddTeamForm = () => {
  const [title, setTitle] = useState('')

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()

    try {
      const body = { title }
      await fetch(`/api/team`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      await Router.push('/teams')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormControl
        sx={{
          minWidth: 226,
        }}
      >
        <InputLabel htmlFor="my-input">+ Add Team</InputLabel>
        <Input
          id="add-team"
          onChange={(e) => setTitle(e.target.value)}
          sx={{ color: 'black' }}
        />
      </FormControl>
    </form>
  )
}

export default AddTeamForm
