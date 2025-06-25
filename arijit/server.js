const express = require("express");
require('dotenv').config();


const app = express();

app.use(express.json());

const PORT = process.env.PORT;

const myDetails = {
    name: 'Arijit',
    hometown: 'Falta',
    degree: 'B.Tech',
    email: 'ghosharijit184@gmail.com'
}

app.get('/me',(req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'Data fetched successfully',
        data: myDetails

    })

});

const allProduct = [
    {
        id: 1,
        name: 'Apple',
        price: 1000
    },

   {
        id: 2,
        name: 'Banana',
        price: 500
    },

    {
        id: 3,
        name: 'Cherry',
        price: 2000
    }

]


app.get('/products',(req,res) =>{
    res.status(200).json({
        status: 'success',
        message: "Here is all product",
        data: allProduct
    })
});


app.post('/products', (req, res) =>{
    const product = req.body;
    console.log(product);

    res.status(201).json({
        status: 'success',
        message: 'Product created successfully',
        data: product
    })
});


app.listen(PORT, () => {
      console.log(`server is running on port ${PORT}`);
});