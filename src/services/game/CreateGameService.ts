import prismaClient from "../../prisma";

interface GameRequest{
    name: string;
    company: string
    description: string;
    poster: string;
    category_id: string;
}

class CreateGameService{
    async execute({ name, description, company, poster, category_id } : GameRequest) {

        const game = await prismaClient.game.create({
            data: {
                name: name,
                description: description,
                company: company,
                poster: poster,
                category_id: category_id

            }
        });

        return game;
    }
}

export { CreateGameService }