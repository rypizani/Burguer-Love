import { Request, Response } from 'express';
import User from '../../model/User/User'; // Importa o modelo do usuário
import { IUser } from '../../model/User/User'; // Importa explicitamente a interface IUser
import { generateRandomToken } from '../../utils/authutils'; // Ajuste o caminho conforme necessário

export const register = async (req: Request, res: Response) => {
  try {
    const { username, email, password, tpuser } = req.body;

    // Cria um novo usuário
    const newUser: IUser = new User({
      id: generateUserId(), // Substitua por sua lógica de geração de ID
      username,
      email,
      password,
      tpuser,
    });

    // Salva o usuário no banco de dados
    await newUser.save();

    // Gera um token de acesso para o novo usuário
    const accessToken = generateRandomToken(newUser);

    // Retorna o token e outros dados do usuário se necessário
    res.status(201).json({ accessToken, userId: newUser.id, username: newUser.username });
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro no servidor');
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    // Procura o usuário no banco de dados pelo email
    const user = await User.findOne({ email });

    // Se o usuário não for encontrado, retorna uma mensagem de erro
    if (!user) {
      return res.status(401).json({ message: 'Credenciais inválidas' });
    }

    // Compara a senha fornecida com a senha armazenada no banco de dados
    const passwordMatch = await user.comparePassword(password);

    // Se as senhas não coincidirem, retorna uma mensagem de erro
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Credenciais inválidas' });
    }

    // Gera um token de acesso para o usuário
    const accessToken = generateRandomToken(user);

    // Retorna o token e outros dados do usuário se necessário
    res.status(200).json({ accessToken, userId: user.id, username: user.username });
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro no servidor');
  }
};

// Função para gerar um ID de usuário simples (substitua por uma lógica mais robusta se necessário)
function generateUserId(): string {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}
