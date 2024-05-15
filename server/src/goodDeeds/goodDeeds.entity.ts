import { Prisma } from '@prisma/client';

export class GoodDeed implements Prisma.GoodDeedGetPayload<null> {
  id!: number;
  userId!: number;
  title!: string;
  description: string | null;
  date!: Date;
  createdAt: Date;
  updatedAt: Date;
}
