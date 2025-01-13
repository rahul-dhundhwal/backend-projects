import express from 'express';
import {login,register} from "../controllers/authController.js";

const router = express.Router();

//route for registartion
router.post('/register',register);


//route for login
router.post('/login',login);


export default router;