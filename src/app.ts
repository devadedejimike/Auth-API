import dotenv from 'dotenv';
import express from 'express';
import connectDB from './Config/db'

dotenv.config();
connectDB();

const app = express()
app.use(express.json())


export default app;