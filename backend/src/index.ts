import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Carrega variáveis de ambiente do .env
dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rota de teste
app.get('/', (_req, res) => {
  res.send('Hello World!');
});

// Porta
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
