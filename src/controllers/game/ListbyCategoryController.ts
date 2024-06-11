import {Request, Response} from 'express';
import { ListbyCategoryService } from '../../services/game/ListbyCategoryService';

class ListbyCategoryController{
    async handle(req: Request, res: Response) {
        const category_id = req.query.category_id as string;

        const listbyCategory = new ListbyCategoryService();

        const games = await listbyCategory.execute({
            category_id
        });
        return res.json(games)
    }
}

export { ListbyCategoryController }