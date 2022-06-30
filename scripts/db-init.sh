#!/bin/sh

npm config set update-notifier false
cd app

echo "Install bash and execute 'wait-for-it.sh' script"
apk add --update bash
./scripts/wait-for-it.sh $PG_HOST:5432 --timeout=30 --strict -- echo "postgres up and running"

echo "### Database initialization - Start ###"
echo "Running migrartions..."
npx prisma migrate deploy
echo "Running seeds..."
# ts-node --project tsconfigs/tsconfig.prisma-seed.json prisma/seed.ts
echo "### Database initialization - End ###"