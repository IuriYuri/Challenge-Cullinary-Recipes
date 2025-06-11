import { Request, Response } from 'express';
import receitaService from '../services/receita.service';

const cadastrarReceitaController = async (req: Request, res: Response): Promise<void> => {
  try {
    const { nome, ingredientes, modo_preparo, tempo_preparo_minutos, porcoes, id_categoria } = req.body;
    const id_usuarios = req.user?.id;
    
    if (!nome || !ingredientes || !modo_preparo || !tempo_preparo_minutos || !porcoes || !id_categoria) {
        res.status(400).json({ erro: 'Todos os campos são obrigatórios.' });
        return;
    }

    const receita = await receitaService.cadastrarReceita({
      nome,
      id_usuarios,
      id_categoria,
      ingredientes,
      modo_preparo,
      tempo_preparo_minutos,
      porcoes
    });

    res.status(201).json(receita);
  } catch (err: any) {
    res.status(500).json({ erro: 'Erro interno', detalhes: err.message });
  }
};

export default cadastrarReceitaController;