import bcrypt from 'bcryptjs';
import User from "../models/User.js";
import jwt from "jsonwebtoken";


export class AuthService {
    static async register (userData) {
        const { firstName, lastName, email, password, role, createdAt } = userData;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            role,
            createdAt
        });
        return await user.save();
    }
    
    static async login(loginData) {
        const { email, password } = loginData;

        const user = await User.findOne({ email });
        if(!user || !(await bcrypt.compare(password, user.password))) {
            throw new Error("Invalid email or password");
        }

        const token = jwt.sign({
            id: user._id,
            role: user.role
        }, process.env.JWT_SECRET, { expiresIn: '1h' });

        return token;    
    }

    static async getUser(userId) {
        const user = await User.findOne({_id: userId});
        if(!user) {
            throw new Error("User not found");
        }

        return user;
    }
}
