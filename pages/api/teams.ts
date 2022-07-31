import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@lib/prisma'
import { getSession } from 'next-auth/react'

// POST /api/teams
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req })

  if (session) {
    const result =
      session.user?.email &&
      (await prisma.team.findMany({
        where: {
          ownerEmail: session.user.email,
        },
      }))

    res.json(result)
  } else {
    res.status(401).send({ message: 'Unauthorized' })
  }
}
