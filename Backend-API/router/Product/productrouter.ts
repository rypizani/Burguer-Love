import express, { Router } from 'express';
import { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct } from '../../controller/Product/ProductController';

const router: Router = express.Router();

// Rota para listar todos os produtos
router.get('/', getAllProducts);

// Rota para obter um produto por ID
router.get('/:id', getProductById);

// Rota para criar um novo produto
router.post('/', createProduct);

// Rota para alterar um produto por ID
router.patch('/:id', updateProduct);

// Rota para excluir um produto por ID
router.delete('/:id', deleteProduct);

export default router;
