import express from 'express';
import { getAllCategories } from '../../controller/Category/CategoryController'; // Certifique-se de ajustar o caminho conforme necessário

const router = express.Router();

// Rota para obter todas as categorias
router.get('/', getAllCategories);

export default router;
