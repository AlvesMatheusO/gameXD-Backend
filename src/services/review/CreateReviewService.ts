import prismaClient from "../../prisma";

interface ReviewRequest{
    title: string;
    body: string;
    like: boolean;
    stars: number;
    user_id: string;
    game_id: string;
}

class CreateReviewService{
    
    async execute({ title, body, like, stars, user_id, game_id }: ReviewRequest ){

        const review = await prismaClient.review.create({
            data: {
                title: title,
                body: body,
                like: like,
                stars: stars,
                user_id: user_id,
                game_id: game_id

            }
        });
        return review;

    }
}

export { CreateReviewService }