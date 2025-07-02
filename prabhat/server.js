const express = require("express");
const connectDB = require("./config/db");
const tourRoutes = require("./routes/tourRoutes");
const authRoutes = require("./routes/authRoutes")
require("dotenv").config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT;

connectDB();

const myDetails = {
  name: "prabhat",
  hometown: "shapoorji",
  degree: "B.Tech",
  email: "Prabhat@gmail.com",
};

app.get("/me", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Data fetched successfully",
    data: myDetails,
  });
});

const allProducts = [
  {
    name: "Product 1",
    price: 100,
    quantity: 10,
  },
  {
    name: "Product 2",
    price: 200,
    quantity: 20,
  },
  {
    name: "Product 3",
    price: 300,
    quantity: 30,
  },
];

const getAllProducts = (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Data fetched successfully",
    data: allProducts,
  });
};

const createProduct = (req, res) => {
  const product = req.body;
  let a = allProducts.push(product);
  console.log(a);
  console.log(allProducts);

  res.status(201).json({
    status: "success",
    message: "Product created successfully",
    data: product,
  });
};

const getProductById = (req, res) => {
  const { id } = req.params;

  if (id >= allProducts.length) {
    res.status(404).json({
      status: "error",
      message: "product not found",
    });
    return;
  } else {
    const product = allProducts[id];
    console.log(product);
    res.status(200).json({
      status: "success",
      message: "Product fetched successfully",
      data: product,
    });
  }
};

const updateProduct = (req, res) => {
  const { id } = req.params;

  if (id >= allProducts.length) {
    res.status(404).json({
      status: "error",
      message: "product not found",
    });
    return;
  }
  const newProduct = req.body;

  allProducts[id] = newProduct;
  console.log(allProducts);

  res.status(200).json({
    status: "success",
    message: "product edited successfully",
    data: allProducts[id],
  });
};

const deleteProduct = (req, res) => {
  const { id } = req.params;
  if (id >= allProducts.length) {
    res.status(404).json({
      status: "error",
      message: "product not found",
    });
    return;
  }
  allProducts.splice(id, 1);
  console.log(allProducts);
  res.status(204).json({
    status: "success",
    message: "product deleted successfully",
  });
};

// Routes
app
    .route("/products")
    .get(getAllProducts)
    .post(createProduct);
app
  .route("/products/:id")
  .get(getProductById)
  .put(updateProduct)
  .delete(deleteProduct);

 
app.use ("/api/v1/tour",tourRoutes);
app.use("/api/v1/auth", authRoutes);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});