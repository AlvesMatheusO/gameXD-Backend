import { Router } from 'express'
import { CreateUserController } from './controllers/user/CreateUserController'
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailsUserController } from './controllers/user/DetailsUserController';

import { isAuthenticated } from './middlewares/isAuthenticated';

const router = Router();

router.post('/users', new CreateUserController().handle)

router.post('/session', new AuthUserController().handle)

router.get('/profile', isAuthenticated, new DetailsUserController().handle)

export { router }