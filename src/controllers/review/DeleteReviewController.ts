import { Request, Response } from 'express';
import { DeleteReviewService } from '../../services/review/DeleteReviewService';

class DeleteReviewController{
    async handle(req: Request, res: Response) {
         const review_id = req.query.review_id as string;

         const deleteReview = new DeleteReviewService();

         const review = await deleteReview.execute({
            review_id
         });

         return res.json(review);
    }
}

export { DeleteReviewController }