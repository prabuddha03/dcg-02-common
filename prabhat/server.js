const express = require('express');//require is used to import the express module
require(`dotenv`).config();
const app = express();//app is the express application
app.use(express.json());
const PORT =process.env.PORT;//port is the port number on which the server will run
const myproduct =[
    { 
    
 name: `product2`,
    id: `diamon03`,
    price: `54`,
   } ,

   {

    name: `product1`,
    id: `diamon02`,
    price: `52`,
   

   },
   {
     name: `product3`,
    id: `diamon01`,
    price: `51`,
   }
]
app.get(`/products`,(req,res) => {
    res.status(200).json({
        status: `success`,
        message: ` data fetched successfully`,
        data: myproduct

    })
})
app.post(`/products`, (req,res) => {
    const product =req.body;
    console.log(product);
    res.status(201).json({
     status: `success`,
        message: ` data fetched successfully`,
        data: myproduct
}
    )

})
app.listen(PORT, () =>   {
    console.log(`server is running on port ${PORT}`);
} );

