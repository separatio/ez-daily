import { Typography, InputBase, Button, Container } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { useState } from 'react'

const EditableField = ({ initialValue, updateRequest }: EditableFieldProps) => {
  const [name, setName] = useState(initialValue)
  const [isFieldFocused, setIsFieldFocused] = useState(false)

  const handleBlur = (event: React.SyntheticEvent) => {
    setIsFieldFocused(false)

    if (!name) {
      setName(initialValue)
      return
    }

    updateRequest(event, name)
  }

  const useStyles = makeStyles({
    root: {
      padding: '0px',
    },
  })

  const classes = useStyles()

  return (
    <Container
      fixed
      sx={{
        minHeight: '48px',
        alignItems: 'center',
        padding: '0',
      }}
      className={classes.root}
    >
      {!isFieldFocused ? (
        <Typography>
          <Button
            value={name}
            onClick={() => {
              setIsFieldFocused(true)
            }}
            fullWidth
            disableRipple
            sx={{
              textTransform: 'none',
              color: 'text.primary',
              fontSize: '16px',
              justifyContent: 'left',
              minWidth: '218px',
              minHeight: '48px',
              paddingLeft: '12px',
              marginRight: '12px',
            }}
          >
            {name}
          </Button>
        </Typography>
      ) : (
        <InputBase
          autoFocus
          value={name}
          onChange={(event) => setName(event.target.value)}
          onBlur={(event) => handleBlur(event)}
          sx={{
            paddingLeft: '12px',
          }}
        />
      )}
    </Container>
  )
}

interface EditableFieldProps {
  initialValue: string
  updateRequest: (e: React.SyntheticEvent, name: string) => Promise<void>
}

export default EditableField
