import { Avatar, Typography } from '@mui/material'
import { useSession } from 'next-auth/react'

const Profile = () => {
  const { data: session } = useSession()

  if (!session) return null

  return (
    <>
      <Typography
        variant="h6"
        component="div"
        align="right"
        sx={{
          flexGrow: 1,
          marginRight: 5,
        }}
      >
        {session.user?.name}
      </Typography>
      <Avatar src={session.user?.image || undefined} />
    </>
  )
}

export default Profile
