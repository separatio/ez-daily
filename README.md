# Ez Daily

This project has been created to be used during all-remote daily meetings.

# Setup

1. Install node modules by running:

```
yarn install
```

2. Install Docker and make sure `docker compose` is installed as well.

# Running in development mode

Simply run:

```
yarn docker:dev
```

This will start up both the server and a database locally, while still using hot reload.

## Database

In order to set up the project completely, you need to generate the db.
After running `yarn docker:dev`, the database can be created via:

```
npx prisma migrate dev --preview-feature
```
