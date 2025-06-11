import { UsuarioInterface } from '../../modules/user/dtos/usuario.dto';

declare global {
  namespace Express {
    interface Request {
      user?: {
        id: number;
        login: string;
      };
    }
  }
}
