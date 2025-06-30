const express = require('express');
const connectDb=require('./config/db')

const tourRoute= require('./routes/tourRoutes')

require('dotenv').config();



const app = express();

app.use(express.json());

const PORT = process.env.PORT;

connectDb();

const myDetails = {
    name: 'Prabuddha',
    hometown: 'Durgapur',
    degree: 'B.Tech',
    email: 'prabuddha@gmail.com'
}

app.get('/me', (req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'Data fetched successfully',
        data: myDetails
    })
});

const allProduts = [
    {
        name: 'Product 1',
        price: 100,
        quantity: 10
    },
    {
        name: 'Product 2',
        price: 200,
        quantity: 20
    },
    {
        name: 'Product 3',
        price: 300,
        quantity: 30
    }
    ]

app.get('/products', (req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'Data fetched successfully',
        data: allProduts
    })

});

app.post('/products', (req, res) => {
    const product = req.body;
    console.log(product);


    res.status(201).json({
        status: 'success',
        message: 'Product created successfully',
        data: product
    })
});

app.use("/api/v1/tours", tourRoute)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});