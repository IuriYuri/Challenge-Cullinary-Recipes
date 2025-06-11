import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import usuarioRoutes from './modules/usuario/routes/usuario.routes';
import receitaRoutes from './modules/receita/routes/receita.route';
import categoriaRoutes from './modules/categoria/routes/categoria.route';
import { autenticarJWT } from './middlewares/auth.middleware';

dotenv.config();
const app = express();

app.use(cors({
  origin: 'http://localhost:5173', // porta do Vite
  credentials: true
}));
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Content-Type', 'application/json; charset=utf-8')
  next()
})
app.use('/usuarios', usuarioRoutes);
app.use('/categorias', categoriaRoutes);
app.use('/receitas', autenticarJWT, receitaRoutes )

app.get('/', (_req, res) => {
  res.send('Back rodando');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
