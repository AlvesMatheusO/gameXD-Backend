import { Router } from 'express'

import { CreateUserController } from './controllers/user/CreateUserController'
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailsUserController } from './controllers/user/DetailsUserController';
import { CreateCategoryController } from './controllers/category/CreateCategoryController';

import { isAuthenticated } from './middlewares/isAuthenticated';

const router = Router();

// Users Routes
router.post('/users', new CreateUserController().handle)

router.post('/session', new AuthUserController().handle)

router.get('/profile', isAuthenticated, new DetailsUserController().handle)

// Categories Routes 
router.post('/category', isAuthenticated, new CreateCategoryController().handle)

export { router }