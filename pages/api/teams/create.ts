import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../src/lib/prisma'
import { getSession } from 'next-auth/react'

// POST /api/teams/create
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req })

  const { title } = req.body

  const result = await prisma.team.create({
    data: {
      title: title,
      author: { connect: { email: session?.user?.email || undefined } },
    },
  })
  res.json(result)
}
