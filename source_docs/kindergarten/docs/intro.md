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

While the server is running in postman run the migrate route to create the database tables

```bash title="src\controllers\Migration\Migration.controller.ts"
{baseUrl}/migrate/up
```

```json title="Body: "
{
  "run": "go"
}
```