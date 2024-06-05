import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
 
export const createToken = (id:string,email:string, expiresIn : string) => {
    const payload = {id, email };
    const token = jwt.sign(payload,process.env.JWT_SECRET, {
        expiresIn, //after 7 days token will be expired
    });
    return token;
};

export const verifyToken = async (req:Request, res:Response,next:NextFunction) => {};
