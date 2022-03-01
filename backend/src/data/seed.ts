import { PrismaClient } from "@prisma/client";
import { policies } from "./policies";
import { customers } from "./customers";

const prisma = new PrismaClient();

async function main() {
  await prisma.policy.createMany({
    data: policies,
    skipDuplicates: true,
  });

  await prisma.customer.createMany({
    data: customers,
    skipDuplicates: true,
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
