# Prisma / Next.js / TypeScript boilerplate ![Heisenberg](misc/heisenberg.png)

[![CI][build-badge]][build-url]
[![CI][integration-tests-badge]][integration-tests-url]
[![TypeScript][typescript-badge]][typescript-url]

Boilerplate with focus on best practices and painless developer experience:

- Minimal setup that can be extended 🔧 _(no UI, fetching, validation, lodash... utility libraries 🎉)_
- Easily spin up local dev environment 🌀
- End-To-End type safety with TypeScript

## Requirements

- [Node v18+](https://nodejs.org/)
- [Docker](https://www.docker.com/)

## Running

_Easily set up a local development environment_

- clone the repo
- `npm run db-start` - Creates Postgres database container instance seeded with Breaking Bad characters and batches 💊 (default credentials `user=walter`, `password=white` [.env file](./envs/dev.env))
- `npm run dev` - Start NextJs 🚀
- `npm run test-integration` - Run integration test 🧪

Visit [localhost:3000](http://localhost:3000/)

## Features:

- [Prisma v4](https://www.prisma.io/) ORM
- [TypeScript v4](https://github.com/microsoft/TypeScript) codebase
- [NextJs](https://github.com/vercel/next.js) RESTful API

## Contributing

All contributions are welcome!

[build-badge]: https://github.com/mkosir/prisma-next-typescript-boilerplate/actions/workflows/build.yml/badge.svg
[build-url]: https://github.com/mkosir/prisma-next-typescript-boilerplate/actions/workflows/build.yml
[integration-tests-badge]: https://github.com/mkosir/prisma-next-typescript-boilerplate/actions/workflows/test-be-integration.yml/badge.svg
[integration-tests-url]: https://github.com/mkosir/prisma-next-typescript-boilerplate/actions/workflows/test-be-integration.yml
[typescript-badge]: https://badges.frapsoft.com/typescript/code/typescript.svg?v=101
[typescript-url]: https://github.com/microsoft/TypeScript
