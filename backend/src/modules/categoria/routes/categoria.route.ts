import { Router } from 'express';
import getCategoriasController from '../controllers/getCategorias.controller';

const router = Router();

router.get('/', getCategoriasController);

export default router;