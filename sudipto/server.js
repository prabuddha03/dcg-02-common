const express = require("express");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT;

app.use(express.json());

const sudipto = {
    name: "Sudipto",
    hometown: "Kolkata",
    degree: "B.Tech",
    email: "sudipto@gmail.com"
}

// const products = {
//   firstproduct: {
//     id: "001",
//     name: "Product 1",
//     price: "100",
//   },

//   secondproduct: {
//     id: "002",
//     name: "Product 2",
//     price: "100",
//   },

//   thirdproduct: { id: "003", name: "Product 3", price: "100" },
// };

const products = [
   {
    id: "001",
    name: "Product 1",
    price: "100",
  },

   {
    id: "002",
    name: "Product 2",
    price: "100",
  },

   { id: "003", 
    name: "Product 3", 
    price: "100" },
];

app.get ('/me', (req, res) =>{
    res.status(200).json({
        status: "success",
        message: "Data fetched successfully",
        data: sudipto
    })
})

app.get("/product", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Data fetched successfully",
    data: products,
  });
});

app.post("/product",(req,res) =>{
    const product = req.body;
    console.log(product);
    res.status(201).json({
    status: "success",
    message: "Product crreated successfully",
    data: product,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  // console.log("Server is running on port " +port);
});
