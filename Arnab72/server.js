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
  console.log(product);

  res.status(201).json({
    status: 'success',
    message: 'product created successfully',
    data: product
  })
});

app.listen(PORT,() => {
  console.log(`server is running on port ${PORT}`);
});
