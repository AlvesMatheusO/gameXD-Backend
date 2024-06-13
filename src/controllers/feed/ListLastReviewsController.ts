import { Request, Response } from 'express';
import { ListLastReviewsService } from '../../services/feed/ListlastReviewsService';

class ListLastReviewsController{

    async handle( req: Request, res: Response ) {

        const listReviewsService = new ListLastReviewsService();

        const reviews = await listReviewsService.execute();

        return res.json(reviews);

    }
}

export { ListLastReviewsController }