const express = require('express');
require('dotenv').config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT;

const myDetails = {
    name: 'mehbub',
    hometown: 'sarisha',
    degree: 'cse',
    email: 'mehbubofficial2002@gmail.com'
};

app.get('/me', (req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'data fetched successfully',
        data: myDetails
    });
});

const myproduct = [
    {
        id: '01',
        name: 'apple',
        brand: 'lv',
        status: 'fresh'
    },
    {
        id: '02',
        name: 'banana',
        brand: 'gg',
        status: 'notfresh'
    },
    {
        id: '03',
        name: 'kiwi',
        brand: 'pd',
        status: 'fresh'
    }
];

app.get('/products', (req, res) => {
    res.status(200).json({
        message: 'data fetched succesfully',
        data: myproduct
    });
});

const product = [
    {
        id: '01',
        name: 'footcall',
        brand: 'lv',
        status: 'fresh'
    },
    {
        id: '02',
        name: 'cricket',
        brand: 'gg',
        status: 'notfresh'
    }
];
app.post('/product1',(req, res) => {
    const product =req.body;
    console.log(product);

    res.status(201).json({
        status:'succes',
        message: 'product created succesfully',
        data: product
    })
})

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});
