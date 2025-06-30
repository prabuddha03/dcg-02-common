const express = require('express');
const connectDB = require("./config/db");
const tourRoutes = require("./routes/tourRoutes");

require('dotenv').config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT;

connectDB();

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
const getAllproducts =(req,res)=>{
    res.status(200).json({
    status:'success',
    message:'Data fetched succesfully',
    data:allProducts
   })
};

const createProduct = (req,res)=>{
    const product = req.body;

    console.log(product);

    let a = allProducts.push(product);
    console.log(a);
    console.log(allProducts);
    //console.log(allProducts.length);
    res.status(200).json({
    status:'success',
    message:'Data fetched succesfully',
    data:product
   })
};

const getProductById = (req,res)=>{
    const { id } = req.params;
    if (id >= allProducts.length){
        res.status(404).json({
            status:'error',
            message:'product not found',
        })
        return;
    }
        else{
        const product = allProducts[id];
        console.log(product);
        res.status(200).json({
            status:'success',
            message:'Data fetched succesfully',
            data:product
        })
    }

};


const updateProduct = (req,res) =>{
    const { id } = req.params;
    if(id >= allProducts.length){
        res.status(404).json({
            status:'error',
            message:'product not found',
        })
        return;
    }

    const newProducts = req.body;
    allProducts[id]=newProducts;
    console.log(allproducts);

    res.status(200).json({
        status: 'success',
        message:'product edited succesfully',
        data:allProducts[id]

    })

};

const deleteProduct = (req,res) => {
    const {id} = req.params;
    if(id>=allProducts.length){
        res.status(404).json({
            status:"error",
            message:"Product not found",
        })
        return;
    }
     //allProducts.pop(allProducts[id]);//
     allProducts.splice(id, 1);
    console.log(allProducts);
    res.status(204).json({
        status: 'success',
        message:'product deleted succesfully',
        //data:allProducts[id]

    })
};



//app.get('/products', getAllproducts);
//app.post('/products', createProduct);
//app.get('/products/:id',  getProductById);
//app.put('/products/:id', updateProduct); 
//app.delete('/products/:id', deleteProduct);
    

//Route

app
 .route("/products")
 .get(getAllproducts)
 .post(createProduct);

app
 .route("/products/:id")
 .get(getProductById)
 .put(updateProduct)
 .delete(deleteProduct);

 app.use("/api/v1/tours",tourRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    //console.log("server is running on port" +port)
});



//(req,res)=>{
  //  if(req.params.id>=allProducts.length){
    //    res.status(404).json({
      //      status:'error',
        //    message:'product not found',
        //})
        //return;
    //} else{
      //  console.log(req.params);
        //const id = req.params.id;
        //const product = allProducts[id];
        //res.status(200).json({
          //  status:'success',
            //message:'Data fetched succesfully',
            //data:product
        //})
    //}
    //const { id } = req.params;
    //const product = allProducts[id];
   // res.status(200).json({
     //   status: 'success',
      ////  message:'product fetched succesfully',
       // data:product
   // })

//});
