const express = require ('express');
require('dotenv').config();
const app = express();
 app.use(express.json());
const PORT = process.env.PORT;

const myDetails = {
    name: 'Anish',
    degree: 'B.Tech'
}

const allProducts = [
    {
      id: 1
    },
    
   {
        id: 2
    },

 {
        id: 3
    }
]

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
    let a = allProducts.push(product);
    console.log(a);
     console.log(allProducts);
     res.status(201).json({
        status: 'success',
        message: 'product created  successfully',
        data: product
     });

})

app.get('/products/:id', (req, res) => {
    const { id } = req.params;
    const product = allProducts[id];
    res.status(201).json({
        status: 'success',
        message: 'product fetched successfully',
        data: product
    })
})

app.put('/products/:id', (req, res) => {
    const newProduct = req.body;
    const{id}  = req.params;

    allProducts[id] = newProduct;
    console.log(allProducts);
     res.status(200).json({
        status: 'success',
        message: 'product edited successfully',
        data: allProducts[id]
    })


})


app.delete('/products/:id', (req, res) => {
    const{id}  = req.params;
    allProducts.splice(id,1);

    console.log(allProducts);
    res.status(204).json({
        status: 'success',
        message: 'product deleted successfully',
        
    })
})



app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})