const express = require('express');

require('dotenv').config();

const app = express();

app.use(express.json());

const PORT= process.env.PORT;

const myDetails = {
    name: 'Rishad',
    hometown: 'Kapathat',
    degree: 'B.Tech',
    email: 'rdm3745@gmail.com'
}

app.get('/me', (req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'Data fetched successfully',
        data: myDetails
    
    })
});

const allProducts = [
    {
        id: '01',
        name: 'Product 1',
        price: 500,
        quantity: 20
    },
    {
        id: '02',
        name: 'Product 2',
        price: 200,
        quantity: 15
    },
    {
        id: '03',
        name: 'Product 3',
        price: 300,
        quantity: 30
    }
]

app.get('/products', (req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'Data fetched successfully',
        data: allProducts
    
    })
});



app.post('/products',(req, res) => {
    const product = req.body;
    console.log(product);

    res.status(201).json({
        status: 'success',
        message: 'Product created successfully',
        data: product

    })
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});