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
    const Product = req.body;

    let a = myProduct.push(Product);
    console.log(a);
    console.log(myProduct);

    res.status(201).json({
        status:'sucess',
        message:'data fetched successfully',
        data: myProduct
    })
});

app.get('/products/:id',(req, res) => {
    const {id} = req.params.id; // const {id} = req.params;
    const product = myProduct[id];

    res.status(200).json({
        status:'sucess',
        message:'data fetched successfully',
        data: product
    })
});

//for update the product
app.put('/products/:id',(req, res)=>{
    const newProduct = req.body;
    const {id} = req.params;

    myProduct[id] = newProduct;
    console.log(myProduct);
    res.status(200).json({
        status:'sucess',
        message:'data fetched successfully',
        data: myProduct[id]
    })
})

//for delete
app.delete('/products/:id',(req, res)=>{
    const {id} = req.params;
    //myProduct.pop(myProduct[id]); 
    myProduct.splice(id , 1);
    console.log(myProduct);

    res.status(204).json({
        status:'sucess',
        message:'data fetched successfully',
    })
})

app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`);
});