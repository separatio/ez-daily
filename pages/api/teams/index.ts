import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../src/lib/prisma'
import { getSession } from 'next-auth/react'

// POST /api/teams
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req })

  if (session) {
    const result = await prisma.team.findMany({
      where: { authorEmail: session.user.email | undefined }
    });
    res.json(result)
  } else {
    res.status(401).send({ message: 'Unauthorized' })
  }
}
