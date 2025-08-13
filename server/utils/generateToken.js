const JWT = require('jsonwebtoken');

const generateToken = (res,user,message) => {
    const token = JWT.sign({id:user._id},process.env.JWT_SECRET,{
        expiresIn:"7d"
    });
    return res.status(200).cookie("token",token,{
        httpOnly:true,
        secure:true,
        sameSite:"strict",
        maxAge:7*24*60*60*1000
    }).json({
        success:true,
        message,
        user
    });
};

module.exports = { generateToken };