import mongoose, { Document, Schema, Model } from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// Definindo a interface IUser, que estende a interface Document do Mongoose
export interface IUser extends Document {
  id: string;
  username: string;
  email: string;
  password: string;
  tpuser: string;
  accessToken: string | null; // Adicionando o campo accessToken
  comparePassword(candidatePassword: string): Promise<boolean>;
}

// Criando o esquema do Mongoose para o usuário
const userSchema: Schema<IUser> = new Schema({
  id: { type: String, required: true, unique: true },
  username: { type: String, required: true,},
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  tpuser: { type: String, required: true },
  accessToken: { type: String }, // Adicionando o campo accessToken
});

// Middleware para verificar se o email já existe antes de salvar
userSchema.pre('save', async function (next) {
  try {
    const User = mongoose.model('User') as Model<IUser>; // Importa o modelo aqui

    // Procurando um usuário com o mesmo email no banco de dados
    const existingUser = await User.findOne({ email: this.email });

    // Se um usuário com o mesmo email já existir, lança um erro
    if (existingUser) {
      const error = new Error('Email já existe no banco de dados');
      return next(error);
    }

    // Se a senha não foi modificada, prossegue para a próxima etapa
    if (!this.isModified('password')) return next();

    // Gerando o hash da senha antes de salvar no banco de dados
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(this.password, salt);
    this.password = hashedPassword;

    // Gere ou obtenha um token de acesso
    const accessToken = generateRandomToken(this);
    this.accessToken = accessToken;

    return next();
  } catch (error: any) {
    return next(error);
  }
});

// Método para comparar a senha fornecida com a senha armazenada
userSchema.methods.comparePassword = async function (candidatePassword: string): Promise<boolean> {
  try {
    const match = await bcrypt.compare(candidatePassword, this.password);
    return match;
  } catch (error) {
    throw error;
  }
};

// Função para gerar um token de acesso aleatório usando jsonwebtoken
function generateRandomToken(user: IUser): string {
  // Usando o id do usuário como payload do token
  const payload = { userId: user.id };

  // Utilizando o bcrypt para gerar um salt para a assinatura do token
  const salt = bcrypt.genSaltSync(10);

  // Gerando o token com um tempo de expiração de 1 hora
  const token = jwt.sign(payload, salt, { expiresIn: '1h' });

  return token;
}

// Criando o modelo User a partir do esquema
const User: Model<IUser> = mongoose.model('User', userSchema);

// Exportando o modelo User para uso em outras partes do código
export default User;
