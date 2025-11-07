import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';
import User from '../Models/userModel';

interface DecodedToken {
    id: string,
    iat: string,
    exp: string
}

const JWT_SECRET = process.env.JWT_SECRET_KEY!;

export const protect = async (req: Request, res: Response, next: NextFunction) => {
    try {
        let token;
        // Check if token exists in header
        if(
            req.headers.authorization && req.headers.authorization.startsWith('Bearer')
        ){
            token = req.headers.authorization.split(" ")[1];
        }
        if(!token){
            return res.status(401).json({ message: 'Authorization failed, Token missing' })
        }

        // Verify token
        const decoded = jwt.verify(token, JWT_SECRET) as unknown as DecodedToken;

        // find user using decoded id
        const currentUser = await User.findById(decoded.id)
        if(!currentUser){
            return res.status(401).json({message: "user not found"})
        }
        // attach user to request object
        (req as any).user = currentUser;
        // Proceed to next middleware/controller
        next()
    } catch (error) {
        res.status(401).json({
            status: 'fail',
            message: 'Invalid or expired token', error
        })
    }
}