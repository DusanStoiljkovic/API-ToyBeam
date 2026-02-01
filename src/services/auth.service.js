import bcrypt from 'bcryptjs';
import User from "../models/User.js";
import jwt from "jsonwebtoken";


export class AuthService {
    static async register (userData) {
        const { firstName, lastName, email, password, role, phone, city, postalCode, address, favouriteProductCategories } = userData;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            role,
            phone,
            city,
            postalCode,
            address,
            favouriteProductCategories
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

    static async editProfile(userId, userData) {
        const allowedFields = [
            "firstName",
            "lastName",
            "email",
            "phone",
            "city",
            "postalCode",
            "address",
            "favouriteProductCategories"
        ];

        const filteredData = Object.fromEntries(
            Object.entries(userData)
            .filter(([key, value]) =>
                allowedFields.includes(key)
            )
        );

        if (Object.keys(filteredData).length === 0) {
            throw new Error("No valid fields to update");
        }

        const user = await User.findByIdAndUpdate(
            userId,
            filteredData,
            {
            new: true,
            runValidators: true
            }
        );

        if (!user) {
            throw new Error("User not found");
        }

        return user;
    }

    static async changePassword(userId, body) {
        const hashedPassword = await bcrypt.hash(body.password, 10);
        console.log("userId: ", userId)
        console.log("hashed: ", hashedPassword);
        const user = await User.findByIdAndUpdate(userId, {password: hashedPassword}, { new: true });
        if(!user) 
            throw new Error("User not found");
    }

}
