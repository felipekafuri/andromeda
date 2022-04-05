import { prisma } from "."
import { hash } from 'bcrypt'

async function main() {
  const DEFAULT_PASSWORD: string = await hash('123456', 10)
  await prisma.owners.create({
    data: {
      email: 'felipe11.rk@gmail.com',
      name: 'Felipe Kafuri',
      password: DEFAULT_PASSWORD
    },
  })
}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
