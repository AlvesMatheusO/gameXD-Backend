import { Request, Response } from "express";
import { CreateReviewService } from "../../services/review/CreateReviewService";

class CreateReviewController {

    async handle( req: Request, res: Response ) {

        const { title, body, like, stars, user_id, game_id } = req.body;

        const createReviewService = new CreateReviewService();

        const review = await createReviewService.execute({
            title,
            body,
            like,
            stars,
            user_id,
            game_id
        });
        return res.json(review);
    }

}

export { CreateReviewController }