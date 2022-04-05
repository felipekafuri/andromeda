import { Request, Response } from 'express';
import { CreateExpensesUseCase } from './createExpensesUseCase';

export class CreateOwnerController {
  async handle(request:Request, response:Response): Promise<Response> {
    const {
      name,
      amount,
      date,
      category,
      description,
      ownerId,
    } = request.body;
    const createExpensesUseCase = new CreateExpensesUseCase();
    const expense = await createExpensesUseCase.execute({
      name,
      amount,
      date,
      category,
      description,
      ownerId,
    });
    return response.status(200).json(expense);
  }
}
