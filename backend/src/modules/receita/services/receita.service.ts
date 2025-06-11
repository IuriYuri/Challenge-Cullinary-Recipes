import prisma from '../../../config/prisma'

interface ReceitaDTO {
    nome: string;
    id_usuarios?: number;
    id_categoria?: number;
    ingredientes: string;
    modo_preparo: string;
    tempo_preparo_minutos: number;
    porcoes: number;
    criado_em?: Date;
    alterado_em?: Date;
}

class ReceitaService {
    
    async getReceitaPorId(id: number) {
        return await prisma.receitas.findUnique({
            where: { id },
            include: { categorias: true }
        });
    }

    async cadastrarReceita({
        nome,
        id_usuarios,
        id_categoria,
        ingredientes,
        modo_preparo,
        tempo_preparo_minutos,
        porcoes
    }: ReceitaDTO){
        const agora = new Date();

        const receita = await prisma.receitas.create({
            data: {
                nome,
                id_usuarios: id_usuarios as number,
                id_categorias: id_categoria as number,
                ingredientes: ingredientes,
                modo_preparo: modo_preparo,
                tempo_preparo_minutos: tempo_preparo_minutos,
                porcoes,
                criado_em: agora,
                alterado_em: agora
            }
        });

        return receita;
    }

    async getReceitasDoUsuario(userId: number) {
        return await prisma.receitas.findMany({
            where: {
                id_usuarios: userId
            },
            include: {
                categorias: true
            }
        });
    }

    async editarReceita(
        id: number,
        { nome, ingredientes, modo_preparo, tempo_preparo_minutos, porcoes }: Partial<ReceitaDTO>) {
        const agora = new Date();
        const receita = await prisma.receitas.update({
            where: { id },
            data: {
                nome,
                ingredientes,
                modo_preparo: modo_preparo,
                tempo_preparo_minutos: tempo_preparo_minutos,
                porcoes,
                alterado_em: agora
            }
        });
        return receita;
    }

    async excluirReceita(id: number) {
        return await prisma.receitas.delete({
            where: { id }
        });
    }
}

export default new ReceitaService();