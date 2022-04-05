import { prisma } from "."
import { hash } from 'bcrypt'



async function main() {
  const DEFAULT_PASSWORD: string = await hash('123456', 10)
  const owners = [
    {
      email: 'felipe11.rk@gmail.com',
      name: 'Felipe Kafuri',
      password: DEFAULT_PASSWORD
    },
    {
      email: 'matheus10.rk@gmail.com',
      name: 'Matheus Kafuri',
      password: DEFAULT_PASSWORD
    },
  ]
  await prisma.owners.createMany({
    data: owners
  })
}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
