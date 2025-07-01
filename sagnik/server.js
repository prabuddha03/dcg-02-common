const express = require('express');
const morgan = require("morgan");


const tourRoutes = require("./routes/tourRoutes");
const authRoutes = require("./routes/authRoutes");




require('dotenv').config();
const app = express();
const PORT = process.env.PORT;
const connectDB = require("./config/db");
connectDB();

app.use(express.json());
app.use(morgan("dev"));



const Sagnik = {
    name:'sagnik',
    degree:'B.tech',
    email:'sagnik99333@gmail.com'
}

app.get('/me',(req, res)=>{
    res.status(200).json({
        status:'success',
        message:'Data fetched succesfully',
        data:Sagnik
    })
})


const Products = [
    {
        id:'1',
        name:'mobile'
    },

    {
        id:'2',
        name:'laptop'
    },
    
    
    {
        id:'3',
        name:'tvs'
    }
    

]

app.get('/products',(req, res)=>{
    res.status(200).json({
        status:'success',
        message:'Data fetched succesfully',
        data:Products
    })
})




app.post('/products',(req,res)=>{
    const products = req.body;
    console.log(products)
    res.status(201).json({
        status:'success',
        message:'product created successfully',
        data:products
    })
})




app.use("/api/v1/tours", tourRoutes);
app.use("/api/v1/auth", authRoutes);






app.listen(3000,()=>{

    console.log(`Server is running on port ${PORT}`);
})


