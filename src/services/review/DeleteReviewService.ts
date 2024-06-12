import prismaClient from "../../prisma";

interface ReviewRequest{
    review_id: string;
}

class DeleteReviewService{

    async execute ({ review_id } : ReviewRequest) {

        const review = await prismaClient.review.delete({
            where:{
                id: review_id
            }
        })
        return review;
        
    }
}

export { DeleteReviewService }