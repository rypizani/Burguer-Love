import mongoose, { Document, Schema, Model } from 'mongoose';

// Definindo a interface ICategory que estende a interface Document do Mongoose
interface ICategory extends Document {
  id: string;
  parent: ICategory | null;
  name: string;
}

// Criando o esquema do Mongoose para a categoria
const categorySchema: Schema<ICategory> = new Schema({
  id: { type: String, required: true, unique: true },
  parent: { type: Schema.Types.ObjectId, ref: 'Category', default: null },
  name: { type: String, required: true },
});

// Criando o modelo Category a partir do esquema
const Category: Model<ICategory> = mongoose.model('Category', categorySchema);

// Exportando o modelo Category e a interface ICategory
export { Category, ICategory };
