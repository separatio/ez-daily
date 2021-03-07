# Daily Facilitator

This project has been created to be used during all-remote daily meetings.

# Dockerization

In order to run the project in development mode, please install `Docker` and `docker-compose`.

Then simply run:
```
docker-compose -f docker-compose.dev.yml up -d --build
```

This should start up all the needed containers, along with hot reload, in Docker.