# Prisma / Next.js / TypeScript boilerplate ![Heisenberg](misc/heisenberg.png)

[![CI][build-badge]][build-url]
[![CI][test-be-integration-badge]][test-be-integration-url]
[![TypeScript][typescript-badge]][typescript-url]

Boilerplate with focus on best practices and painless developer experience:

- Minimal setup that can be extended 🔧 _(no UI, fetching, validation, lodash... utility libraries 🎉)_
- Easily spin up local dev environment 🌀
- RESTful APIs
- End-To-End type safety with TypeScript _(Database <-> API <-> Frontend)_

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
- Unit and integration tests with [Jest](https://github.com/facebook/jest)
- Easily start local development using [Docker Compose](https://docs.docker.com/compose/) with spinning up seeded database `npm run db-start`
- Linting with [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/) code formatter
- Git hooks with [Husky](https://github.com/typicode/husky) and [lint-staged](https://github.com/okonet/lint-staged)
- Commit messages must meet [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) format.  
  After staging changes just run `npm run commit` and get instant feedback on your commit message formatting and be prompted for required fields by [Commitizen](https://github.com/commitizen/cz-cli)

## Contributing

All contributions are welcome!

[build-badge]: https://github.com/mkosir/prisma-next-typescript-boilerplate/actions/workflows/build.yml/badge.svg
[build-url]: https://github.com/mkosir/prisma-next-typescript-boilerplate/actions/workflows/build.yml
[test-be-integration-badge]: https://github.com/mkosir/prisma-next-typescript-boilerplate/actions/workflows/test-be-integration.yml/badge.svg
[test-be-integration-url]: https://github.com/mkosir/prisma-next-typescript-boilerplate/actions/workflows/test-be-integration.yml
[typescript-badge]: https://badges.frapsoft.com/typescript/code/typescript.svg?v=101
[typescript-url]: https://github.com/microsoft/TypeScript
