import User from "../models/User.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const register = async (req, res) => {
    try {
        const salt = bcrypt.genSaltSync(10);  // Use genSaltSync instead of genSalt
        const hash = bcrypt.hashSync(req.body.password, salt);

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            photo: req.body.photo,
            password: hash
        });

        await newUser.save();

        res.status(200).json({
            success: true,
            message: "Created"
        });
    } catch (err) {
        console.error("Registration failed:", err.message);  // Log the error message
        res.status(500).json({
            success: false,
            message: "Failed"
        });
    }
};

export const login = async (req, res) => {
    const email = req.body.email
    try {
        const user = await User.findOne({email})

        if(!user){
            return res
                .status(404)
                .json({
                    success: false,
                    message: "User not found"
                })
        }

        const checkPassword = await bcrypt.compare(req.body.password, user.password)

        if(!checkPassword){
            return res
                .status(401)
                .json({
                    success: false,
                    message: "Incorrect"
                })
        }

        const {password, role, ...rest} = user._doc

        const token = jwt.sign(
            {id:user._id, role: user.role},
            process.env.JWT_KEY,
            {expiresIn: "15d"}
        );

        res.cookie('accessToken', token, {
            httpOnly: true,
            expires:token.expiresIn
        })
            .status(200)
            .json({
                token,
                data:{...rest},
                role,
        })

    } catch (err) {
        console.error("Login failed:", err.message);  // Log the error message
        res.status(500).json({
            success: false,
            message: "Failed"
        });
    }
};
