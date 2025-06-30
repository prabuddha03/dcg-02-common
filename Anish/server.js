const express = require("express");
const connectDB = require("./config/db");
const tourRoutes = require("../Anish/routes/tourRoutes")

require("dotenv").config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT;

connectDB();

const myDetails = {
  name: "Anish",
  hometown: "Falta",
  degree: "B.Tech",
  email: "ghosharijit184@gmail.com",
};

const allProducts = [
  {
    id: 1,
    name: "Apple",
    price: 1000,
  },

  {
    id: 2,
    name: "Banana",
    price: 500,
  },

  {
    id: 3,
    name: "Cherry",
    price: 2000,
  },
];

const getAllProducts = (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Data fetched successfully",
    data: myDetails,
  });
};

const creatProduct = (req, res) => {
  const { id } = req.params;
  if (!id) {
    res.status(404).json({
      status: "error",
      message: "product not found",
    });
    return;
  }

  if (req.params.id >= allProducts.length) {
    res.status(404).json({
      status: "error",
      message: "product not found",
    });
    return;
  } else {
    console.log(req.params);
    const { id } = req.params; //const id = req.params.id;
    const product = allProducts[id];
    res.status(200).json({
      status: "success",
      message: "Data fetched successfully",
      data: product,
    });
  }
};
const getProductById = (req, res) => {
  const product = req.body;

  console.log(product);

  let a = allProducts.push(product);
  console.log(a);
  console.log(allProdcuts);

  res.status(200).json({
    status: "success",
    message: "Product created successfully",
    data: product,
  });
};
const updateProduct = (req, res) => {
  const newProduct = req.body;
  const { id } = req.params;

  allProducts[id] = newProduct;
  console.log(allProducts);
  res.status(200).json({
    status: "success",
    message: "Product updated successfully",
    data: allProducts[id],
  });
};
const deleteProduct = (req, res) => {
  const { id } = req.params;
  allProducts.splice(id, 1);
  console.log(allProducts);

  if (req.params.id >= allProducts.length) {
    res.status(404).json({
      status: "error",
      message: "product not found",
    });
    return;
  } else {
    res.status(204).json({
      status: "success",
      message: "Product deleted successfully",
    });
  }
};

app
   .route("/products") 
   .get(getAllProducts)
   .post(creatProduct);

app
  .route("products/:id")
  .get(getProductById)
  .put(updateProduct)
  .delete(deleteProduct);

  app.use("/api/v1/tours", tourRoutes);


app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});