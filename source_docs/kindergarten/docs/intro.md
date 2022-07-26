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

To start the server in you terminal run :

```bash
npm run serve
```

**Create new database in via pgAdmin**

While the server is up, run a migration command in the terminal:

```bash
npm run migration:up
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