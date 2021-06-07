import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import Adapters from 'next-auth/adapters';
import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

export default NextAuth({
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Providers.Atlassian({
      clientId: process.env.ATLASSIAN_CLIENT_ID,
      clientSecret: process.env.ATLASSIAN_CLIENT_SECRET,
      scope: 'write:jira-work read:jira-work read:jira-user offline_access read:me',
    }),
  ],
  pages: {
    signIn: '/signin',
  },
  adapter: Adapters.Prisma.Adapter({prisma}),
});
