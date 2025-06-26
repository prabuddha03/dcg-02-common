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

const allProducts = [
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


app.get('/products/:id',(req,res) =>{
    const { id } = req.params; //const id = req.params.id;
    const product = allProducts[id];
    res.status(200).json({
      status: "success",
      message: "Data fetched successfully",
      data: product,
  });

});


app.post('/products', (req, res) =>{
    const product=req.body;
    
    console.log(product);

    let a= allProducts.push(product);
    console.log(a);
    console.log(allProdcuts);

    res.status(200).json({
        status: 'success',
        message: 'Product created successfully',
        data: product
    })
});

    

    

   

app.put('/products/:id', (req,res) => {
    const newProduct= req.body;
    const{id}=req.params;

    allProducts[id]=newProduct;
    console.log(allProducts)
    res.status(200).json({
        status: 'success',
        message: 'Product updated successfully',
        data: allProducts[id]
    })

});


app.delete('/products/:id', (req,res) =>{
    const{id}=req.params;
    allProducts.splice(id, 1);
    console.log(allProducts);
    

    res.status(204).json({
        status: 'success',
        message: 'Product deleted successfully',
        
    })

});


app.listen(PORT, () => {
      console.log(`server is running on port ${PORT}`);
});