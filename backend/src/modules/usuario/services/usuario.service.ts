import prisma from '../../../config/prisma';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { UsuarioInterface, CriarUsuarioDTO } from '../dtos/usuario.dto';

dotenv.config();

class UsuarioService {
  async getUsuario(login: string): Promise<UsuarioInterface | null> {
    return await prisma.usuarios.findUnique({ where: { login } });
  }

  async criarUsuario( usuario: CriarUsuarioDTO): Promise<UsuarioInterface> {
    const senhaHash = await bcrypt.hash(usuario.senha, 10);
    const agora = new Date();

    const novoUsuario = await prisma.usuarios.create({
      data: {
        nome: usuario.nome,
        login: usuario.login,
        senha: senhaHash,
        criado_em: agora,
        alterado_em: agora
      }
    });

    return novoUsuario;
  }

  async loginUsuario( senha: string, usuario: UsuarioInterface): Promise<string> {
    const senhaValida = await bcrypt.compare(senha, usuario.senha);

    if (!senhaValida) throw new Error('Senha incorreta');

    const token = jwt.sign({ id: usuario.id, login: usuario.login }, process.env.JWT_SECRET as string, {
        expiresIn: '24h'
    });
    return token;
    }
}

export default new UsuarioService();
