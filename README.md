# Daily Facilitator

This project has been created to be used during all-remote daily meetings.

# Setup

1. Before using the project, make sure to install node modules
   by run the following in the terminal:

```
yarn
```

2. Install the Postgres Client for the database.
   The database server will be ran as a docker container later.

# Dockerization

In order to run the project in development mode, please install `Docker` and `docker-compose`.

Then simply run:

```
docker-compose -f docker-compose.dev.yml up -d --build
```

This should start up all the needed containers, along with hot reload, in Docker.

## Database

In order to set up the project completely, you still need to generate the db.
You can do this via `npx` in the terminal, by running the following in the project folder:

```
npx prisma migrate dev --preview-feature
```

This will set up the database from scratch.
