import { User } from "../models/userModel";
import { hashPassword, comparePassword } from "../utils/passwordUtils.js";
import { generateToken,verifyToken } from "../utils/jwtUtils.js";
import { sendEmail } from "../utils/emailUtils.js";

const requestPasswordReset = async (req, res) => {
    const { email } = req.body;
    
    try {
        const user = await User.findOne({ email }); 
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        const token = generateToken({ email });
        const resetLink = `${process.env.CLIENT_URL}/reset-password/${token}`;
        const emailData = {
            to: email,
            subject: "Password reset link",
            text: `Click on the link to reset your password: ${resetLink}`,
        };
        await sendEmail(emailData);
        return res.status(200).json({ message: "Email sent" });
    }catch (error) {   
        return res.status(500).json({ error: error.message });
    }   
};

const resetPassword = async (req, res) => {
    const { token, password } = req.body;
    try {
        const decoded = verifyToken(token);
        if (!decoded) {
            return res.status(400).json({ message:"Invalid Token" });
        }
        const hashedPassword = await hashPassword(password);
        await User.findOneAndUpdate(decoded._id, { password: hashedPassword }); 
        res.status(200).json({ message: "Password updated" });
    }catch (error) {
        return res.status(500).json({ message: 'Error resetting password', error: error.message });
    }
};

export { requestPasswordReset, resetPassword };
