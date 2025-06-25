const express = require('express');
require('dotenv').config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT;

const myDetails = {
    name: 'Rajdeep',
    hometown: 'Falta',
    degree: 'B.Tech',
    email: 'rajdeep@gmail.com'
}

app.get('/me',(req, res) => {
    res.status(200).json({
        status:'sucess',
        message:'data fetched successfully',
        data: myDetails 
    })
});

const myProduct = [
    {
        id: '01',
        name: 'mobile'
    },
    {
        id: '02',
        name: 'laptop'
    },
    {
        id: '03',
        name: 'car'
    }
];


app.get('/products',(req, res) => {
    res.status(200).json({
        status:'sucess',
        message:'data fetched successfully',
        data: myProduct
    })
});

app.post('/products',(req, res) => {
    const myProduct = req.body;
    console.log(myProduct);

    res.status(201).json({
        status:'sucess',
        message:'data fetched successfully',
        data: myProduct
    })
});

app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`);
});