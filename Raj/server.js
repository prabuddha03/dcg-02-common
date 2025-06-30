const express = require('express');
const connectDB = require("./config/db");
const tourRoutes = require("./routes/tourRoutes");

require('dotenv').config();

const app = express();

app.use(express.json());

const port = process.env.port;

connectDB();

const Raj = {
    name: 'Raj',
    hometown: 'kolkata',
    degree: 'B.Tech',
    email: 'rajkrishna001@gmail.com' 
}

const Products = [
    {
        Name: 'Pavilon 15',
        Brand: 'HP',
        Product_type:'Laptop',
        Price: '60000.00'
    },
    {
        Name: 'Airdopes 121',
        Brand: 'Boat',
        Product_type: 'Airdopes',
        Price: '1200.00'
    },
    {
        Name: 'Nord CE3 Lite',
        Brand: 'Oneplus',
        Product_type: 'Airdopes',
        Price: '1200.00'
    }
]

app.get('/me',(req, res)=>{
    res.status(200).json({
        status: 'success',
        message: 'Data fetched successfully',
        data: Raj
    })
});

app.get('/products',(req, res)=>{
    res.status(200).json({
        status: 'sucess',
        data: Products
    })
});

app.post('/products',(req, res)=>{
    const product = req.body;
    console.log(product);

    res.status(201).json({
        status: 'sucess',
        message: 'Product created successfully',
        data: product
    })
});


app.use("/api/v1/tours", tourRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});