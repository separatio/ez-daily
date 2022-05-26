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
    const user =
      session.user &&
      (await prisma.user.findUnique({
        where: { email: session.user.email || undefined },
      }))

    // const result = await prisma.team.create({
    //   data: {
    //     title: 'test',
    //     author: user || undefined
    //   }
    // })
  }
}
