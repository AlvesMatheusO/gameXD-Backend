import { Request, Response } from "express";
import { DetailsUserService } from '../../services/user/DetailsUserService';

class DetailsUserController {

    async handle(req: Request, res: Response) {

        const user_id = req.user_id;
        console.log("ID DO USER: ", user_id)

        const detailUserService = new DetailsUserService();
        const user = await detailUserService.execute(user_id);

        return res.json(user)
    }
}

export { DetailsUserController }