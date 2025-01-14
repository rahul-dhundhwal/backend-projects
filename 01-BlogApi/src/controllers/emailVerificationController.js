import { User } from "../models/userModel.js";
import { verifyToken } from "../utils/jwtUtils.js";

const verifyEmail = async (req, res) => {
  try {
    const token = req.params.token;
    const decoded = verifyToken(token);
    if(!decoded){
      res.status(400).json({message:"Invalid token"});
    }
    await User.findByIdAndUpdate(decoded._id,{isVerified:true});
    res.status(200).json({message:"Email verified successfully"});
    } catch (error) {
    res.status(500).json({ message: "Internal server error" });
    }
};

export { verifyEmail };