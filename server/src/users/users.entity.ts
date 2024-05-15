import { Prisma } from '@prisma/client';

export class User implements Prisma.UserGetPayload<null> {
  id!: number;
  tgName: string;
  name: string;
  isOpenedList: boolean;
  createdAt: Date;
  updatedAt: Date;
}
