import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from '../Models/userModel';

const JWT_SECRET = process.env.JWT_SECRET as string;


export const signUp = async (req: Request, res: Response) => {
    try {
        const {username, email, password} = req.body;

        // Check if user already exist
        const existingUser =  await User.findOne({email});
        if(existingUser){
            return res.status(400).json({message: "User already exist"})
        }

        // If user doesnt exist
        const newUser = await User.create({username, email, password});
        const token = jwt.sign({id: newUser._id}, JWT_SECRET, {expiresIn: "7d"});
        res.status(201).json({
            status: 'success',
            token,
            data: {
                user: newUser
            },
            message: 'New user created successfully'
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            error: error,
            message: 'Failed to create a new user'
        })
    }
}


export const Login = async (req: Request, res: Response) => {
    try {
        const {email, password} = req.body;
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({message: "Incorrect Email or Password"});
        }
        const checkPassword = await bcrypt.compare(password, user.password);
        if(!checkPassword){
            return res.status(400).json({message: 'Incorrct Password'});
        }
        const token = jwt.sign({id: user._id}, JWT_SECRET, {expiresIn: "7d"});
        res.status(200).json({
            status: 'success',
            token,
            data: {user},
            message: 'User login successfully'
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: 'User login failed', error 
        })
    }
}