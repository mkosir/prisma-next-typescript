#!/bin/sh

npm config set update-notifier false
cd app

printf "Install bash and execute 'wait-for-it.sh' script"
apk add --update bash
./scripts/wait-for-it.sh $PG_HOST:5432 --timeout=30 --strict -- printf "postgres up and running"

printf "\n\n### Database initialization - Start ###\n"
export ENV=db-init
printf "\n### Running migrartions... ###\n"
npm run db-migration-run
printf "\n### Running seeds... ###\n"
npx prisma generate # support Prisma query engine in Alpine for seeding
npm run db-seed-run
printf "\n\n### Database initialization - End ###\n"