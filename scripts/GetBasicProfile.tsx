import { useSession } from 'next-auth/react'

export default function getBasicProfile() {
  const { data: session, status } = useSession()

  if (session) {
    return {
      name: session.user?.name,
      image: session.user?.image,
    }
  }
}
