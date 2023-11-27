import express from 'express';
import { register, login } from '../../controller/Auth/AuthController'; // Certifique-se de ajustar o caminho conforme necessário

const router = express.Router();

// Rota de registro
router.post('/register', register);

// Rota de login
router.post('/login', login);

export default router;
