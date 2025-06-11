import { Request, Response } from 'express';
import UsuarioService from '../services/usuario.service';

const loginController = async (req: Request, res: Response): Promise<void> => {
  const { login, senha } = req.body;
  try {
    if (!login || !senha) {
      res.status(400).json({ erro: 'Login e senha são obrigatórios.' });
      return;
    }

    const usuario = await UsuarioService.getUsuario(login);
    if (!usuario) {
      res.status(404).json({ erro: 'Usuário não existente' });
      return;
    }
    
    const token = await UsuarioService.loginUsuario( senha, usuario);
    res.status(200).json({ usuario, token });
  } catch (error: any) {
    res.status(400).json({ erro: error.message });
  }
};

export default loginController;