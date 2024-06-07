import { Request, Response } from "express";
import { DetailsUserService } from '../../services/user/DetailsUserService';

class DetailsUserController {

    async handle(req: Request, res: Response) {
        const detailUserService = new DetailsUserService();
        const user = await detailUserService.execute();

        return res.json(user)
    }
}

export { DetailsUserController }