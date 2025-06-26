const express = require('express');
require('dotenv').config();

const app = express();
app.use(express.json());
const PORT = process.env.PORT;
const myDetails = {
  name: 'Arnab',
  hometown: 'falta',
  degree: 'btech',
  email: 'arnabhaldar11@gmail.com'
}

const allProducts = [
  { 
  productName:'laptop',
  productId: '1',
  price: '50000'
},  
 { 
  productName:'mobile',
  productId: '2',
  price: '50000'
},
{ 
  productName:'bike',
  productId: '3',
  price: '100000'
}
];


app.get('/products',(req,res)=>{
  res.status(200).json(
    {
      status: 'success',
      message: 'Data fetched successfully',
      data: allProducts
    })   
});

app.post('/products',(req, res)=>{
  const product = req.body;

  let a = allProducts.push(product);
  console.log(a);
  console.log(allProducts);


  res.status(201).json({
    status: 'success',
    message: 'product created successfully',
    data: product
  })
});

app.get('/products/:id',(req, res)=>{
  const {id} = req.params;//const {id}=req.params
  const product= allProducts[id]; 
  res.status(200).json({
    status: 'success',
    message: 'product fetched successfully',
    data: product
  })
});

app.put('/products/:id',(req , res)=>{
  const newProduct = req.body;
  const {id}= req.params;

  allProducts[id] = newProduct;
  console.log(allProducts);
  res.status(200).json({
    status: 'success',
    message:'product edited successfully',
    data: allProducts[id]
  })

})

app.delete('/products/:id', (req, res)=>{
  const {id}= req.params;
  
  allProducts.splice(id, 1);
  //allProducts.pop(allProducts[id]);
  console.log(allProducts);

  res.status(204).json({
    status: 'success',
    message:'product deleted successfully',

})
})

app.listen(PORT,() => {
  console.log(`server is running on port ${PORT}`);
});

