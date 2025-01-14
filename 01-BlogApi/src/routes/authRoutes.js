import express from 'express';
import {login,register} from "../controllers/authController.js";
import validate from '../middlewares/validateMiddleware.js';
import {registerSchema,loginSchema} from '../validations/authValidation.js';


const router = express.Router();

//route for registartion
router.post('/register',validate(registerSchema),register);


//route for login
router.post('/login',validate(loginSchema),login);


export default router;