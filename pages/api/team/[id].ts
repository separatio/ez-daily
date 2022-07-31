import type { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react'
import { prisma } from '@lib/prisma'

// GET /api/team/:id
// DELETE /api/team/:id
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const teamId = req.query.id

  const session = await getSession({ req })

  if (session) {
    switch (req.method) {
      case 'DELETE': {
        const team = await prisma.team.delete({
          where: { id: Number(teamId) },
        })
        res.json(team)
      }
      case 'GET': {
        const team = await prisma.team.findFirst({
          where: { id: Number(teamId) },
        })
        res.json(team)
      }
      default:
        throw new Error(
          `The HTTP ${req.method} method is not supported at this route.`
        )
    }
  } else {
    res.status(401).send({ message: 'Unauthorized' })
  }
}
