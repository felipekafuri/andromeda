import { Request, Response } from 'express';
import { CreateOwnerUseCase } from './createOwnerUseCase';

export class CreateOwnerController {
  async handle(request:Request, response:Response): Promise<Response> {
    const { email, name, password } = request.body;
    const createOwnerUseCase = new CreateOwnerUseCase();
    const owner = await createOwnerUseCase.execute({
      email,
      name,
      password,
    });
    return response.status(200).json(owner);
  }
}
