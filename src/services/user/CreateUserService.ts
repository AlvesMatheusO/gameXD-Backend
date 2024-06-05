import prismaClient from '../../prisma';
import { hash } from 'bcryptjs';

interface UserRequest{
    name: string;
    birth: string;
    email: string;
    password: string;
}

class CreateUserService {

    async execute({name, birth, email, password} : UserRequest ){

        //Validations
        if (!email) {
            throw new Error("Insira seu email, por favor.")
        }

        //if email exists.
        
        const userAlreadyExists = await prismaClient.user.findFirst({
            where:{
                email: email
            }
        })

        if (userAlreadyExists) {
            throw new Error("Usuário já existe.");
        }

        const passwordHash = await hash(password, 8);

        const user = await prismaClient.user.create({
            data:{
                name: name,
                birth: birth,
                email: email,
                password: passwordHash
            },
            select:{
                id: true,
                name: true,
                email: true
            }
        })

        return user;
    }
}

export { CreateUserService }