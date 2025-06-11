import { Router } from 'express';
import registerController from '../controllers/registrar.controller';
import loginController from '../controllers/login.controller';

const router = Router();

router.post('/registrar', registerController);
router.post('/login', loginController);

export default router;