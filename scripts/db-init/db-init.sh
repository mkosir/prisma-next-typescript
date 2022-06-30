#!/bin/sh

echo "Install npm"
apk add --update node

echo "### Database initialization - Start ###"
echo "Running migrartions..."
npm run db-migration-run
echo "Running seeds..."
npm run db-seed-run
# npm run db-view
echo "### Database initialization - End ###"