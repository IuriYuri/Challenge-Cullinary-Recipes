import prisma from '../../../config/prisma';

class CategoriaService {
    async getCategorias() {
        return await prisma.categorias.findMany();
    }
}

export default new CategoriaService();