import { PrismaClient, Prisma } from '@prisma/client';
import { batches } from './batches';
import { users } from './users';

const prisma = new PrismaClient();

async function main() {
  await prisma.user.createMany<{ data: Prisma.UserCreateInput[] }>({ data: users });

  // Nested relations not supported using createMany -  https://github.com/prisma/prisma/issues/5455
  // await prisma.batch.createMany<{ data: Prisma.BatchCreateInput[] }>({ data: batches });
  for (let batch of batches) {
    await prisma.batch.create<{ data: Prisma.BatchCreateInput }>({ data: batch });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
