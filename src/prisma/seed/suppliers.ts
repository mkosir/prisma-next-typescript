import { Prisma } from '@prisma/client';

export const supplierIdGoldenMothChemical = '3f008731-4645-43de-8af9-3060d4086001';
export const supplierIdWarehouse = '3f008731-4645-43de-8af9-3060d4086002';

export const suppliers: Prisma.SupplierCreateInput[] = [
  {
    id: supplierIdGoldenMothChemical,
    name: 'Golden Moth Chemical',
    description: "The company's logo is a golden bee",
  },
  {
    id: supplierIdWarehouse,
    name: 'Warehouse',
    description:
      'Lock security guard into portable toilet, carry (not roll) stolen barrel of methylamine, improvise as it goes...',
  },
];
