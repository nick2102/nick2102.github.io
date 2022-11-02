---
title: Getting Started
slug: /
sidebar_position: 1
---

# Getting Started

Instructions for installing and running the project.

### What you'll need

- [Node.js](https://nodejs.org/en/download/) version 16.16 or above
- [postgresSQL](https://www.postgresql.org/download/) database server (Follow official instructions for installation)
- [pgAdmin](https://www.pgadmin.org/download/) postgres db Client (Follow official instructions for installation)
- [Postman](https://www.postman.com/) or some other API Client

## Installation

Clone the project to your projects directory:

```bash title="via SSH"
git clone git@github.com:nick2102/kindergarten-track-backend.git
```

```bash title="via HTTPS"
git clone https://github.com/nick2102/kindergarten-track-backend.git
```

In the root directory run :

```bash
npm install
```

In the root of the project create `.env` file from the .env.example file with the following variables:

```dotenv
PORT=APP_PORT_HERE # Usually 3000

### Database config ###
POSTGRES_HOST=DB_HOST_HERE
POSTGRES_PORT=DB_PORT_HERE # Usually 5432
POSTGRES_USER=DB_USER_HERE
POSTGRES_PASSWORD=DB_PASSWORD_HERE
POSTGRES_DB=DB_NAME_HERE

JWT_SECRET=SOME_RANDOM_LONG_STRING_HERE

### System email config ###
APP_SYSTEM_EMAIL=SENDER_EMAIL_ADDRESS_HERE
SENDGRID_API_KEY=SENDGRID_TOKEN_HERE
APP_EMAIL_SENDER=SENDER_NAME_HERE

#### Mail Trap ###
MAILTRAP_HOST=MAILTRAP_HOST_HERE
MAILTRAP_PORT=MAILTRAP_PORT_HERE
MAILTRAP_USERNAME=MAILTRAP_USER_HERE
MAILTRAP_PASSWORD=MAILTRAP_PASSWORD_HERE
```

To start the server in you terminal run :

```bash
npm run serve
```

**Create new database in via pgAdmin**

While the server is up, run a migration command in the terminal:

```bash
npm run migration:up
```

**Using Stage API and AWS Database**

Stage root endpoint:
```bash
https://kinder.labscreative.com
```

Stage database credentials:

Note: IP Address should be whitelisted before connecting to client

Note: Do not run migartions on stage DB

```dotenv
POSTGRES_HOST: kindergarten-1.cvn82sy5klca.eu-west-1.rds.amazonaws.com
POSTGRES_PORT: 5432
POSTGRES_USER: kinder
POSTGRES_PASSWORD: #Kinder.123
POSTGRES_DB: kindergarten
```


Optionally you can run the migration by calling the request in postman
```bash title="src\controllers\Migration\Migration.controller.ts"
{baseUrl}/migrate/up
```

```json title="Body: "
{
  "run": "go"
}
```

Additional migration commands:

```bash title="for creating new migration files"
npm run migration:generate --name=nameOfMigration
```

```bash title="for rolling back the last migration"
npm run migration:down
```