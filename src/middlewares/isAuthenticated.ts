import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken"; 

interface Payload {
    sub: string;

}

export function isAuthenticated(
    req: Request,
    res: Response,
    next: NextFunction
){
    // Check for token
    const authToken = req.headers.authorization;

    if (!authToken) {
        return res.status(401).end();
    }
    

    // split the string to get only the token
    const [, token] =  authToken.split(" ")

   try {
    //validate token:
    const { sub } = verify(
        token,
        process.env.JWT_SECRET
    ) as Payload;

    console.log(sub);
    
   } catch (error) {
    return res.status(401).end();
   }
}