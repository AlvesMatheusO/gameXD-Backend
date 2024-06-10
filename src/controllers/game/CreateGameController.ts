import { Request, Response } from "express";
import { CreateGameService } from '../../services/game/CreateGameService';

class CreateGameController{
    async handle(req: Request, res: Response) {

        const { name, description, company, category_id} = req.body;
        
        const createGameService = new CreateGameService();

        if (!req.file) {
            throw new Error("Erro ao cadastrar, sem poster")
        } else {

            const { originalname, filename: poster } = req.file;

            const game = await createGameService.execute({
                name,
                description,
                company,
                poster,
                category_id
            });
            
            return res.json(game);
        }


    }
}

export { CreateGameController }