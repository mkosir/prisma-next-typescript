import { PrismaClient, Prisma } from '@prisma/client';
import { batches } from './batches';
import { users } from './users';

const prisma = new PrismaClient();

async function main() {
  await prisma.user.createMany<{ data: Prisma.UserCreateInput[] }>({ data: users });
  await prisma.batch.createMany<{ data: Prisma.BatchCreateInput[] }>({ data: batches });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
