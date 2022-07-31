import { TextField, Typography } from '@mui/material'
import { useState } from 'react'

const EditableField = ({ initialValue, updateRequest }: EditableFieldProps) => {
  const [name, setName] = useState(initialValue)
  const [isFieldFocused, setIsFieldFocused] = useState(false)

  const handleBlur = (event: React.SyntheticEvent) => {
    setIsFieldFocused(false)

    if(!name){
      setName(initialValue)
      return
    }

    updateRequest(event, name)
  }

  return (
    <>
      {!isFieldFocused ? (
        <Typography
          onClick={() => {
            setIsFieldFocused(true)
          }}
        >
          {name}
        </Typography>
      ) : (
        <TextField
          autoFocus
          value={name}
          onChange={(event) => setName(event.target.value)}
          onBlur={(event) => handleBlur(event)}
          size="small"
        />
      )}
    </>
  )
}

interface EditableFieldProps {
  initialValue: string
  updateRequest: (e: React.SyntheticEvent, name: string) => Promise<void>
}

export default EditableField
