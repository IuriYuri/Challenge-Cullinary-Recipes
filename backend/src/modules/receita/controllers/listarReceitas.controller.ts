import { Request, Response } from 'express';
import receitaService from '../services/receita.service';

const listarReceitasController = async (req: Request, res: Response): Promise<void> => {
  try {
    const id_usuario = req.user?.id;
    
    if (!id_usuario) {
      res.status(401).json({ erro: 'Usuário não autenticado' });
      return;
    }

    const receitas = await receitaService.getReceitasDoUsuario(id_usuario);

    res.status(200).json(receitas);
  } catch (err: any) {
    res.status(500).json({ erro: 'Erro ao listar receitas', detalhes: err.message });
  }
};

export default listarReceitasController;
