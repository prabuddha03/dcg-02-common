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
  console.log(product);
  res.status(201).json({
    status: 'success',
    message: 'product created successfully',
    data: products
  });
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
