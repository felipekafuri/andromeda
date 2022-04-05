import { Owners } from '@prisma/client';
import { hash } from 'bcrypt';
import { prisma } from '../../../db';

interface ICreateOwner {
  name: string;
  email: string;
  password: string
}

export class CreateOwnerUseCase {
  async execute({ email, name, password }: ICreateOwner): Promise<Owners> {
    const ownerExists = await prisma.owners.findUnique({
      where: { email },
    });

    if (ownerExists) {
      throw new Error('Owner already exists');
    }

    const hashedPassword = await hash(password, 10);

    const owner = await prisma.owners.create({
      data: {
        email,
        name,
        password: hashedPassword,
      },
    });

    return owner;
  }
}
