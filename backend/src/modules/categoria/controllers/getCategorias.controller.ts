import { Request, Response } from "express";
import categoriaService from "../services/categoria.service";

async function getCategoriasController(req: Request, res: Response): Promise<void> {
    try {
        const categorias = await categoriaService.getCategorias();
        res.status(200).json(categorias);
    } catch (err: any) {
        res.status(500).json({ erro: "Erro interno", detalhes: err.message });
    }
}

export default getCategoriasController;