import express from 'express';
import {User} from '../models/userModel.js';
import {generateToken} from '../utils/jwtUtils.js';
import {comparePassword,hashPassword} from '../utils/hashUtil.js';

const register=async(req,res)=> {
    try {
        const {username,email,password}=req.body;
        const encryptedPassword =await hashPassword(password);
        const user = new User({
            username,
            email,
            password:encryptedPassword
        })
        await user.save();
        res.status(201).json({message:"User created successfully"});
    } catch (error) {
        res.status(500).json({message:"Internal server error"});
    }

}

const login=async(req,res)=>{
    try {
        const {email,password}=req.body;
        const user = await User.findOne({email:email});
        if(!user){
            res.status(400).json({message:"Invalid credentials"});
        }
        const isValidPassword = await comparePassword(password,user.password);
        if(!isValidPassword){
            res.status(400).json({message:"Invalid credentials"});
        }
        const token = generateToken({_id:user._id,role:user.role});

        res.status(200).cookie('token',token,{httpOnly:true}).json({message:"Login successful"});

    }catch(error){
        res.status(500).json({message:"Internal server error"});
    }
}


export {register,login};