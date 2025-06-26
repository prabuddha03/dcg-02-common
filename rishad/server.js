const express = require("express");

require("dotenv").config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT;

const myDetails = {
  name: "Rishad",
  hometown: "Kapathat",
  degree: "B.Tech",
  email: "rdm3745@gmail.com",
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
    id: "01",
    name: "Product 1",
    price: 500,
    quantity: 20,
  },
  {
    id: "02",
    name: "Product 2",
    price: 200,
    quantity: 15,
  },
  {
    id: "03",
    name: "Product 3",
    price: 300,
    quantity: 30,
  },
];

const getAllProducts = (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Products fetched successfully",
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
      status: "fail",
      message: "Product not found",
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
      status: "fail",
      message: "Product not found",
    });
    return;
  }
  const newProduct = req.body;

  allProducts[id] = newProduct;
  console.log(allProducts);

  res.status(200).json({
    status: "success",
    message: "Product edited successfully",
    data: allProducts[id],
  });
};

const deleteProduct = (req, res) => {
  const { id } = req.params;
  if (id >= allProducts.length) {
    res.status(404).json({
      status: "fail",
      message: "Product not found",
    });
    return;
  }
  //allProducts.pop(allProducts[id]);
  allProducts.splice(id, 1);
  console.log(allProducts);

  res.status(204).json({
    status: "success",
    message: "Product deleted successfully",
  });
};

// Define routes
app.route("/products").get(getAllProducts).post(createProduct);
app
  .route("/products/:id")
  .get(getProductById)
  .put(updateProduct)
  .delete(deleteProduct);

// app.get('/products', getAllProducts);
// app.post('/products', createProduct);
// app.get('/products/:id', getProductById);
// app.put('/products/:id', updateProduct);
// app.delete('/products/:id', deleteProduct);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
