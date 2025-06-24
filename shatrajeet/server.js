const express= require("express");

const app =express();
const port =3000;

const shatrajeet={
    name:"Shatrajeet",
    hometown:"Kolkata",
    degree:"B.Tech",
    email:"shatrajeet2005@gmail.com"
}

app.get('/me',(req,res)=>{
    res.status(200).json({
        status:"success",
        message:"Data fetched successfully",
        data: shatrajeet
    })
})

app.listen ( port,()=>{
    console.log(`Server is running on port ${port}`);
});