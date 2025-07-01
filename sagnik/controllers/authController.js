const User = require("../models/User");




exports.signup = async (req, res)=> {
    try {

        if (!req.body.name || !req.body.email || !req.body.password){
            return res.status(404).json({
                status: "error",
                message: "Missing required fields"
            });
        }

        const user = await User.findOne({email: req.body.email});
        
        if(user){
            return res.status(404).json({
                status: "error",
                message: "User already rxist"
            });
        }


        const newUser = await User.create(req.body);

        res.status(201).json({
            status: "success",
            data: newUser,
        });
    }  catch (error)  {
        console.log(error);
        res.status(500).json({
            status: "error",
            message: "Faild to create user"
        });
    }
};
