import { Expenses } from "@prisma/client";
import { prisma } from "../../../db";
import { ExpensesCategories } from "../types/Categories";

interface ICreateExpenses{
  description: string;
  amount: number;
  date: Date;
  ownerId: string;
  category: ExpensesCategories;
  name: string
}

export class CreateExpensesUseCase {
  async execute({
    name,
    amount,
    date,
    category,
    description,
    ownerId
  }: ICreateExpenses): Promise<Expenses> {
    if (!Object.values(ExpensesCategories).includes(category)) {
      throw new Error('Invalid Category')
    }

    const expenses = await prisma.expenses.create({
      data: {
        name,
        amount,
        date,
        category,
        description,
        ownerId
      }
    })

    return expenses
  }
}