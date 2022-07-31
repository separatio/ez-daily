import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@lib/prisma'
import { getSession } from 'next-auth/react'

// POST /api/team
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req })

  if (session) {
    const { newTeamName, teamName } = req.body

    const result =
      session.user?.email &&
      (await prisma.team.upsert({
        where: {
          ownerIdentifier: {
            ownerEmail: session.user?.email,
            name: teamName,
          },
        },
        update: {
          name: newTeamName,
        },
        create: {
          name: teamName,
          owner: {
            connectOrCreate: {
              where: {
                userEmail: session.user?.email,
              },
              create: {
                user: { connect: { email: session.user?.email } },
              },
            },
          },
        },
      }))

    res.json(result)
  } else {
    res.status(401).send({ message: 'Unauthorized' })
  }
}
