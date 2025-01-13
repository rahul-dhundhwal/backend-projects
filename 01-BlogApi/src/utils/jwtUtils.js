import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const generateToken=(payload)  =>{
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1d" });
}

const verifyToken=(token) =>{
    try {
        return jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
        return null;
    }
}

export { generateToken, verifyToken };