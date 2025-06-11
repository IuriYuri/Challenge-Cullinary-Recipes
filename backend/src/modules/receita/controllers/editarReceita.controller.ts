import { Request, Response } from 'express';
import receitaService from '../services/receita.service';

const editarReceitaController = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = Number(req.params.id);
    const id_usuario = req.user?.id;
    
    const receita = await receitaService.getReceitaPorId(id);
    if (!receita || receita.id_usuarios !== id_usuario) {
      res.status(403).json({ erro: 'Receita não encontrada ou acesso negado' });
      return;
    }

    const receitaAtualizada = await receitaService.editarReceita(id, req.body);

    res.status(200).json(receitaAtualizada);
  } catch (err: any) {
    res.status(500).json({ erro: 'Erro ao editar receita', detalhes: err.message });
  }
};

export default editarReceitaController;
