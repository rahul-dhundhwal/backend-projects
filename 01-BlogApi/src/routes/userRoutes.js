import express from "express";
import { getUserProfile,updateUserProfile,deleteUserProfile } from "../controllers/userController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router=express.Router();

//Route to get user profile
router.get('/profile',authMiddleware,getUserProfile);

//Route to update user profile
router.put('/profile',authMiddleware,updateUserProfile);

//Route to delete user profile
router.delete('/profile',authMiddleware,deleteUserProfile);

export default router;