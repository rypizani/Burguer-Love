import mongoose, { Document, Schema, Model } from 'mongoose';
import { ICategory } from '../Category/Category'; // Certifique-se de ajustar o caminho conforme necessário

// Definindo a interface IProduct que estende a interface Document do Mongoose
interface IProduct extends Document {
  categories: ICategory[];
  name: string;
  qty: number;
  price: number;
  photo: string;
}

// Criando o esquema do Mongoose para o produto
const productSchema: Schema<IProduct> = new Schema({
  categories: [{ type: Schema.Types.ObjectId, ref: 'Category', required: true }],
  name: { type: String, required: true },
  qty: { type: Number, required: true },
  price: { type: Number, required: true },
  photo: { type: String, required: true },
});

// Criando o modelo Product a partir do esquema
const Product: Model<IProduct> = mongoose.model('Product', productSchema);

// Exportando o modelo Product para uso em outras partes do código
export { IProduct };
export default Product;
