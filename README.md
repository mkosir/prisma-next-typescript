# Prisma / Next.js / TypeScript / GraphQL boilerplate

[![CI][build-badge]][build-url]
[![TypeScript][typescript-badge]][typescript-url]
![Heisenberg](misc/heisenberg.png)

Boilerplate with focus on best practices and painless developer experience:

- Minimal setup that can be extended 🔧
- Easily spin up local dev environment 🌀
- End to end type safety with TypeScript

## Requirements

- [Node v18+](https://nodejs.org/)
- [Docker](https://www.docker.com/)

## Running

_Easily set up a local development environment_

- clone the repo
- `npm run db-start` - Creates Postgres database container instance seeded with Breaking Bad characters and batches 💊 (default credentials `user=walter`, `password=white` [.env file](./envs/dev.env))
- `npm run dev` - Start NextJs 🚀

Visit [localhost:3000](http://localhost:3000/)

## Features:

- [Prisma v4](https://www.prisma.io/) ORM
- [TypeScript v4](https://github.com/microsoft/TypeScript) codebase
- [NextJs](https://github.com/vercel/next.js) framework for building GraphQL

## Contributing

All contributions are welcome!

[build-badge]: https://github.com/mkosir/prisma-next-graphql/actions/workflows/main.yml/badge.svg
[build-url]: https://github.com/mkosir/prisma-next-graphql/actions/workflows/main.yml
[typescript-badge]: https://badges.frapsoft.com/typescript/code/typescript.svg?v=101
[typescript-url]: https://github.com/microsoft/TypeScript
