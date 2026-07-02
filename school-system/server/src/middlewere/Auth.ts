import jwt from "jsonwebtoken";
import type { UserData } from "../secure/generate-token.js";
import type { NextFunction, Request, Response } from "express";
const secret = process.env.SECRET_KEY


export interface AuthRequest  extends Request {
    user?:UserData
}

export const verifyToken = async(req:AuthRequest,res:Response,next:NextFunction)=>{
    try {
        // Bearer data
        const token = req.headers.authorization?.startsWith("Bearer") && req.headers.authorization.split(" ")[1]

        if(!token){
            return res.status(401).json({
                message:"unAuthorized!."
            })
        }
        const decoded = jwt.verify(token, secret!) as UserData
        req.user = decoded
        next()

    } catch (error) {
        console.log(error)
        res.status(401).json({
            message:"invalid token"
        })
    }
}
