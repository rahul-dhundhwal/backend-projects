import {verifyToken} from '../utils/jwtUtils.js';

const authMiddleware = async (req, res, next) => {
    const token =req.headers[authorization]?.split(" ")[1]||req.cookies.token;

    if(!token){
        return res.status(401).json({message:"Unauthorized"});
    }

    try {
        const verified = verifyToken(token,process.env.JWT_SECRET);

        req.user=verified;
        next()
    } catch (error) {
        res.status(401).json({message:"Invalid token"});
    }

}

export default authMiddleware;