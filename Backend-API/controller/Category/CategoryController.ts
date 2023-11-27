import { Request, Response } from 'express';
import { Category, ICategory } from '../../model/Category/Category';

export const getAllCategories = async (req: Request, res: Response): Promise<void> => {
  try {
    // Obtém todas as categorias do banco de dados
    const categories: ICategory[] = await Category.find();

    // Retorna as categorias como resposta
    res.status(200).json(categories);
  } catch (error) {
    console.error('Erro ao obter categorias:', error);
    res.status(500).send('Erro no servidor');
  }
};
