# This file is WIP and still needs work done on it
# See guide https://docs.docker.com/language/nodejs/
# for more information on how to complete it accordingly
FROM node:lts-alpine3.13

ENV NODE_ENV=production
WORKDIR /app
COPY ["package.json", "yarn.lock*", "./"]

RUN yarn install
COPY . .

CMD [ "yarn", "dev" ]
