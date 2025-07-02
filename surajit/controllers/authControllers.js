const User= require("../models/User");
const jwt = require("jsonwebtoken");

const signtiken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    });
}
const createSendToken = (user, statusCode, res) => {
    const token = signtiken(user._id);
    
    const cookieOptions = {
        expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000), // 24 hours
        httpOnly: true, 

    };
    if (process.env.NODE_ENV === 'production') cookieOptions.secure = true; 

    res.cookie('jwt', token, cookieOptions);

    user.password = undefined; 
    
    res.status(statusCode).json({
        status: "success",
        token,
            data: {
                user
            }
        });
    }

exports.signup = async (req,res) => {
    try{
        if(!req.body.name || !req.body.email || !req.body.password){
            return res.status(400).json({
                 status:"error",
                 message:"Missing required fields"
            });
        }
        const user= await User.findOne({email:req.body.email});

        if(user){
            return res.status(400).json({
                  status:"error",
                   message: "User already exists"
            });
        }
             
        const newUser= await User.create(req.body);
        createSendToken(newUser, 201, res)

        // res.status(201).json({
        //     status:"success",
        //     data:newUser
        //     });
        // }
    }
        catch(error)
    
        {
            console.log(error);
             res.status(500).json({
                status:"error",
                message:"Failed to create user"
            });
    }
}