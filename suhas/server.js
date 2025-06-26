const express = require('express');
require('dotenv').config();
const app = express();
app.use(express.json());                 // for post data from postmon

const PORT = process.env.PORT || 3000;

const suhas = {
  name: 'suhas',
  hometown: 'Fatepur',
  degree: 'B.Tech',
  email: 'suhas@gmail.com'
};
const products = [
  {
    name: 'p1',
    productID: '1'
  },
  {
    name: 'p2',
    productID: '2'
  },
  {
    name: 'p3',
    productID: '3'
  }
];
app.get('/me', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'data fetched successfully',
    data: suhas
  });
});

app.get('/products', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'data fetched successfully',
    data: products
  });
});

// create for post data from postmon
app.post('/product', (req, res) => {
  const product = req.body;

  let a = products.push(product);
  console.log(a);
  console.log(products);

  res.status(201).json({
    status: 'success',
    message: 'product created successfully',
    data: products
  });
});


app.get('/product/:id', (req, res) => {       //here product this i can change
  //console.log(req.params);
  const { id } = req.params;      //Object Reconstruction //const id = req.params.id; //it can be possible
  const product = products[id];
  res.status(200).json({
    status: 'success',
    message: 'product fatched successfully',
    data: product
  });
});


//update
app.put('/product/:id', (req, res) => {
  const newProduct =req.body;
  const {id} = req.params;

  products[id] = newProduct;
  console.log(products);
  res.status(200).json({
    status:'success',
    message:'product edited sucessfull',
    data: products[id]
  })
});


//delete
app.delete('/product/:id', (req, res) => {
  const {id} = req.params;

  products.splice(id, 1);
  console.log(products);
  res.status(204).json({
    status:'success',
    message:'product deleted sucessfull',
  })
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

