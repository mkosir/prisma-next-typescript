#!/bin/sh

echo "### Database initialization - Start ###"
echo "Running migrartions..."
npm run db-migration-run
echo "Running seeds..."
npm run db-seed-run
# npm run db-view
echo "### Database initialization - End ###"