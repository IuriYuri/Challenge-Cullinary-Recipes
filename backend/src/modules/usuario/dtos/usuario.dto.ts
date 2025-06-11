export interface UsuarioInterface {
    id: number;
    nome: string | null;
    login: string;
    senha: string;
    criado_em: Date;
    alterado_em: Date;
 }

 export interface CriarUsuarioDTO {
    nome: string;
    login: string;
    senha: string;
 }