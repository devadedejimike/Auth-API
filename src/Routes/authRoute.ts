import express from "express";
import { signUp, Login } from "../Controllers/authController";

const router = express.Router()

router.post('/signup', signUp);
router.post('/login', Login);

export default router;