const express = require("express");
const connectDB = require("./config/db");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT;
const tourRoutes = require("./routes/tourRoutes");

app.use(express.json());

connectDB();

// const sudipto = {
//   name: "Sudipto",
//   hometown: "Kolkata",
//   degree: "B.Tech",
//   email: "sudipto@gmail.com",
// };

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

const allProducts = [
  {
    id: 1,
    name: "Product 1",
    price: "100",
  },

  {
    id: 2,
    name: "Product 2",
    price: "100",
  },

  { id: 3, name: "Product 3", price: "100" },
];

// app.get("/me", (req, res) => {
//   res.status(200).json({
//     status: "success",
//     message: "Data fetched successfully",
//     data: sudipto,
//   });
// });

const getAllProducts = (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Data fetched successfully",
    data: allProducts,
  });
};

const createProduct = (req, res) => {
  const product = req.body;

  console.log(product);

  let a = allProducts.push(product);
  console.log(a);
  console.log(allProducts);
  // console.log(allProducts.length);
  res.status(200).json({
    status: "success",
    message: "Product created successfully",
    data: product,
  });
};

const getProductById = (req, res) => {
  const { id } = req.params; //const id = req.params.id;
  if (id >= allProducts.length) {
    res.status(404).json({
      status: "error",
      message: "Product not found",
    });
    return;
  } else {
    const product = allProducts[id];
    console.log(product);
    res.status(200).json({
      status: "success",
      message: "Data fetched successfully",
      data: product,
    });
  }
};

const updateProduct = (req, res) => {
  const { id } = req.params; //const id = req.params.id;

  if (id >= allProducts.length) {
    res.status(404).json({
      status: "error",
      message: "Product not found",
    });
    return;
  }

  const newProduct = req.body;

  allProducts[id] = newProduct;
  console.log(allProducts);

  res.status(200).json({
    status: "success",
    message: "Data updated successfully",
    data: allProducts[id],
  });
};

const deleteProduct = (req, res) => {
  const { id } = req.params;

  if (id >= allProducts.length) {
    res.status(404).json({
      status: "error",
      message: "Product not found",
    });
    return;
  }
  //const id = req.params.id;
  allProducts.splice(id, 1);

  console.log(allProducts);

  res.status(204).json({
    status: "success",
    message: "Data deleted successfully",
    // data: allProducts[id]
  });
};

// app.get ("/products/:id", (req, res) =>{
//     const { id } = req.params; //const id = req.params.id;
//     const product = allProducts[id];
//     res.status(200).json({
//       status: "success",
//       message: "Data fetched successfully",
//       data: product,
//   });
// });

// app.delete("/products/:id", (req, res) => {
//   const { id } = req.params; //const id = req.params.id;
//   allProducts.splice(id, 1);

//   console.log(allProducts);

//   res.status(204).json({
//     status: "success",
//     message: "Data deleted successfully",
//     // data: allProducts[id]
//   });
// });

//Route

app
  .route("/products")
  .get(getAllProducts)
  .post(createProduct);
app
  .route("/products/:id")
  .get(getProductById)
  .put(updateProduct)
  .delete(deleteProduct);

// app.get("/products", getAllProducts);
// app.post("/products", createProduct);
// app.get("/products/:id", getProductById);
// app.put("/products/:id", updateProduct);
// app.delete("/products/:id", deleteProduct);

app.use("/api/v1/tours", tourRoutes);



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  // console.log("Server is running on port " +port);
});
