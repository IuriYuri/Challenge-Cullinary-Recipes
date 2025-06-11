import { Router } from 'express';
import cadastrarReceitaController from '../controllers/cadastrarReceita.controller';
import listarReceitasController from '../controllers/listarReceitas.controller';
import excluirReceitaController from '../controllers/excluirReceita.controller';
import editarReceitaController from '../controllers/editarReceita.controller';

const router = Router();

router.post('/', cadastrarReceitaController )
router.get('/', listarReceitasController)
router.delete('/:id', excluirReceitaController)
router.put('/:id', editarReceitaController)

export default router;