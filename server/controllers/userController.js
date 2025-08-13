const User = require("../models/userModel");
const bcrypt = require("bcryptjs"); 
const {generateToken} = require("../utils/generateToken");
const { validationResult } = require('express-validator');

const register = async (req, res) => {
    try{
        const {name,email,password} = req.body;
        if(!name || !email || !password){
            return res.status(400).json({
                success:false,
                message:"All fields are required"
            });
        }
        const user = await User.findOne({email});
        if(user){
            return res.status(400).json({
                success:false,
                message:"User already exists"
            });
        }
        const hashedPassword = await bcrypt.hash(password,10);
        const newUser = await User.create({name,email,password:hashedPassword});
        res.status(201).json({
            success:true,
            message:"User registered successfully"
        });
    }catch(error){
        console.log(error);
        res.status(500).json({
            success:false,
            message:error.message
        });
    }
}


const login = async(req,res)=>{
    try {
        const {email , password} = req.body;
        if(!email || !password){
            return res.status(400).json({
                success:false,
                message:"All fields are required"
            });
        }
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({
                success:false,
                message:"User not found"
            });
        }
        const isPasswordMatched = await bcrypt.compare(password,user.password);
        if(!isPasswordMatched){
            return res.status(400).json({
                success:false,
                message:"Incorrect password"
            });
        }

        // Get the plain object from mongoose document and remove password
        const { password: _, ...userData } = user._doc;
        
        generateToken(res, userData, `Welcome back ${userData.name}`);

    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

const forgotPassword = async(req,res)=>{
    try {
        // Validate request body
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ 
                success: false,
                message: 'Validation failed',
                errors: errors.array()
            });
        }
    
        const { email, newPassword, confirmPassword } = req.body;
    
        // Check if passwords match
        if (newPassword !== confirmPassword) {
            return res.status(400).json({
                success: false,
                message: 'Passwords do not match'
            });
        }
    
        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found with this email'
            });
        }
    
        // Hash the new password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(newPassword, salt);
    
        // Update user's password
        user.password = hashedPassword;
        await user.save();
    
        res.status(200).json({
            success: true,
            message: 'Password updated successfully'
        });
    
    } 
    catch (error) {
        console.error('Error in forgotPassword:', error);
        res.status(500).json({
            success: false,
            message: 'Server error',
            error: error.message
        });
    }
};

module.exports = {
    register,
    login,
    forgotPassword
}