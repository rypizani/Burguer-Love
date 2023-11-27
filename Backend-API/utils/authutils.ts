import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { IUser } from '.././model/User/User'; // Ajuste o caminho conforme necessário

export function generateRandomToken(user: IUser): string {
  // Usando o id do usuário como payload do token
  const payload = { userId: user.id };

  // Utilizando o bcrypt para gerar um salt para a assinatura do token
  const salt = bcrypt.genSaltSync(10);

  // Gerando o token com um tempo de expiração de 1 hora
  const token = jwt.sign(payload, salt, { expiresIn: '1h' });

  return token;
}
