#!/bin/sh

npm config set update-notifier false
cd app

echo "Install bash and execute 'wait-for-it.sh' script"
apk add --update bash
./scripts/wait-for-it.sh $PG_HOST:5432 --timeout=30 --strict -- echo "postgres up and running"

echo "### Database initialization - Start ###"
export ENV=db-init
echo "Running migrartions..."
npm run db-migration-run
echo "Running seeds..."
npm run db-seed-run
echo "### Database initialization - End ###"