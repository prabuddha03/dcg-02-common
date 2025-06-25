const express = require ('express');
require('dotenv').config();
const app = express();
 app.use(express.json());
const PORT = process.env.PORT;

const myDetails = {
    name: 'Anish',
    degree: 'B.Tech'
}

const allProducts = {
   product1: {
      id: 1
    },
    
   product2: {
        id: 2
    },

   product: {
        id: 3
    }
}

app.get('/product', (req ,res) =>{
    res.status(200).json({
        price: '500',
        data: allProducts
    })
})

app.get('/me', (req ,res) => {
     res.status(200).json({
        status: 'success',
        message: 'data fetched successfully',
        data: myDetails
     });
})

app.post('/products', (req ,res) =>{
    const product = req.body;
    console.log(allProducts);
     res.status(201).json({
        status: 'success',
        message: 'product created  successfully',
        data: product
     });

})



app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});