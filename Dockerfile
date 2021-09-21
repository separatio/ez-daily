# This file is WIP and still needs work done on it
# See guide https://docs.docker.com/language/nodejs/
# for more information on how to complete it accordingly
FROM node:lts-alpine3.14 as builder

ENV NODE_ENV=production
WORKDIR /app
COPY ["package.json", "yarn.lock*", "./"]
COPY prisma ./prisma/

RUN yarn install
COPY . .

RUN yarn build

FROM node:lts-alpine3.14

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./
COPY --from=builder /app/yarn.lock ./
COPY --from=builder /app/dist ./dist

EXPOSE 3000
CMD [ "yarn", "start"]
