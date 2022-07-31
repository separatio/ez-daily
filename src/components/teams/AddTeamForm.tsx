import { Input, InputLabel } from '@mui/material'
import { FormControl } from '@mui/material'
import Router from 'next/router'
import { useState } from 'react'
import { mutate } from 'swr'

const AddTeamForm = () => {
  const [teamName, setTeamName] = useState('')

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()

    if (!teamName) return

    try {
      const body = { teamName }
      await fetch(`/api/team`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      await Router.push('/teams')
    } catch (error) {
      console.error(error)
    }

    mutate('/api/teams')
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
          onChange={(e) => setTeamName(e.target.value)}
          sx={{ color: 'black' }}
        />
      </FormControl>
    </form>
  )
}

export default AddTeamForm
