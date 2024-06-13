import prismaClient from "../../prisma";

class ListLastReviewsService{
    async execute() {
        const reviews = await prismaClient.review.findMany({
            orderBy:{
                created_at: 'asc'
            }
        });

        return reviews;
    }
}

export { ListLastReviewsService }