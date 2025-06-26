const express = require('express');
require('dotenv').config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT;

const allProducts=[
    {
        name:'laptop',
        id:1,
        },
    {
        name:'desktop',
        id:2,
        
     },
     {
        name:'phone',
        id:3,
}
];
app.get('/products',(req,res)=>{
    res.status(200).json({
    status:'success',
    message:'Data fetched succesfully',
    data:allProducts
   })

})
app.post('/products',(req,res)=>{
    const product = req.body;

    let a = allProducts.push(product);
    console.log(a);
    console.log(allProducts);

    allProducts.push(product);

res.status(200).json({
    status:'success',
    message:'Data fetched succesfully',
    data:product
   })
});

app.get('/products/:id',(req,res)=>{
    const { id } = req.params;
    const product = allProducts[id];
    res.status(200).json({
        status: 'success',
        message:'product fetched succesfully',
        data:product
    })

});

app.put('/products/:id',(req,res) =>{
    const newProducts = req.body;
    const {id} = req.params;

    allProducts[id]=newProducts;
    res.status(200).json({
        status: 'success',
        message:'product edited succesfully',
        data:allProducts[id]

    })

})

app.delete('/products/:id',(req,res)=>{
    const { id } =req.params;
    //allProducts.pop(allProducts[id]);//
    allProducts.splice(id, 1);
    console.log(allProducts);
    res.status(200).json({
        status: 'success',
        message:'product deleted succesfully',
        data:allProducts[id]

    })

})
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});