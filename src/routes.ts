import { Router } from 'express'
import multer from 'multer';

import { CreateUserController } from './controllers/user/CreateUserController'
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailsUserController } from './controllers/user/DetailsUserController';
import { CreateCategoryController } from './controllers/category/CreateCategoryController';
import { ListCategoryController } from './controllers/category/ListCategoryController';
import { CreateGameController } from './controllers/game/CreateGameController';
import { ListbyCategoryController } from './controllers/game/ListbyCategoryController';
import { CreateReviewController } from './controllers/review/CreateReviewController';
import { DeleteReviewController } from './controllers/review/DeleteReviewController';
import { ListLastReviewsController } from './controllers/feed/ListLastReviewsController';

import { isAuthenticated } from './middlewares/isAuthenticated';
import uploadConfig from './config/multer';

const router = Router();

const upload = multer(uploadConfig.upload("./tmp"));

//Feed Route
router.get('/', new ListLastReviewsController().handle)

// Users Routes
router.post('/users', new CreateUserController().handle)

router.post('/session', new AuthUserController().handle)

router.get('/profile', isAuthenticated, new DetailsUserController().handle)

// Categories Routes 
router.post('/category', isAuthenticated, new CreateCategoryController().handle)

router.get('/categories', isAuthenticated, new ListCategoryController().handle)

// Games Routes
router.post('/game', isAuthenticated, upload.single('file'), new CreateGameController().handle)

router.get('/category_games', isAuthenticated, new ListbyCategoryController().handle)

// Review Routes
router.post('/review', isAuthenticated, new CreateReviewController().handle)
router.delete('/deleteReview', isAuthenticated, new DeleteReviewController().handle)

export { router };