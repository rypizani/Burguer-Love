import { Request, Response } from 'express';
import Product, { IProduct } from '../../model/Product/Product'; // Certifique-se de ajustar o caminho conforme necessário


// Listar todos os produtos
export const getAllProducts = async (req: Request, res: Response): Promise<void> => {
  try {
    const products: IProduct[] = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    console.error('Erro ao obter produtos:', error);
    res.status(500).send('Erro no servidor');
  }
};

// Pegar um produto específico
export const getProductById = async (req: Request, res: Response): Promise<void> => {
  try {
    const productId: string = req.params.id;
    const product: IProduct | null = await Product.findById(productId);

    if (!product) {
      res.status(404).json({ message: 'Produto não encontrado' });
      return;
    }

    res.status(200).json(product);
  } catch (error) {
    console.error('Erro ao obter produto:', error);
    res.status(500).send('Erro no servidor');
  }
};

// Criar um novo produto
export const createProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const { categories, name, qty, price, photo }: IProduct = req.body;
    const newProduct: IProduct = new Product({ categories, name, qty, price, photo });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    console.error('Erro ao criar produto:', error);
    res.status(500).send('Erro no servidor');
  }
};

// Alterar um produto
export const updateProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const productId: string = req.params.id;
    const updatedProductData: Partial<IProduct> = req.body;
    const updatedProduct: IProduct | null = await Product.findByIdAndUpdate(
      productId,
      updatedProductData,
      { new: true }
    );

    if (!updatedProduct) {
      res.status(404).json({ message: 'Produto não encontrado' });
      return;
    }

    res.status(200).json(updatedProduct);
  } catch (error) {
    console.error('Erro ao atualizar produto:', error);
    res.status(500).send('Erro no servidor');
  }
};

// Excluir um produto
export const deleteProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const productId: string = req.params.id;
    const deletedProduct: IProduct | null = await Product.findByIdAndDelete(productId);

    if (!deletedProduct) {
      res.status(404).json({ message: 'Produto não encontrado' });
      return;
    }

    res.status(200).json({ message: 'Produto excluído com sucesso' });
  } catch (error) {
    console.error('Erro ao excluir produto:', error);
    res.status(500).send('Erro no servidor');
  }
};
