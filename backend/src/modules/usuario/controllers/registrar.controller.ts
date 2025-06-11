import { Request, Response } from 'express';
import UsuarioService from '../services/usuario.service';

const registrarController = async (req: Request, res: Response): Promise<void> => {
  try {
    const { nome, login, senha } = req.body;

    if (!login || !senha) {
      res.status(400).json({ erro: 'Login e Senha são obrigatórios.' });
      return;
    }
    
    const existe = await UsuarioService.getUsuario(login);
    if (existe) {
      res.status(400).json({ erro: 'Login já cadastrado.' });
      return;
    }

    const usuario = await UsuarioService.criarUsuario({ nome, login, senha });
    const token = await UsuarioService.loginUsuario(senha, usuario);

    res.status(201).json({usuario, token});
  } catch (err: any) {
    res.status(500).json({ erro: 'Erro interno', detalhes: err.message });
  }
};

export default registrarController;
