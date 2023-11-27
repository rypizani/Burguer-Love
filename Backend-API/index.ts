import express from 'express';
import connectDB from './dbconfig'; 
import cors from 'cors';
import authRoutes from './router/Auth/authrouter';
import categoryRoutes from './router/Category/categorrouter';
import productRoutes from './router/Product/productrouter';
const app = express();
app.use(express.json());

app.use(cors({
  origin: 'http://localhost:3000', // Substitua pelo endereço da sua aplicação React
  credentials: true,
}));

// Conectando ao banco de dados
connectDB()
  .then(() => {
    console.log('Connected to MongoDB');



    // Configurando as rotas do usuário
    app.use('/auth', authRoutes);
    app.use('/category', categoryRoutes);
    app.use('/product', productRoutes)


    const PORT = process.env.PORT || 3001;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  });
