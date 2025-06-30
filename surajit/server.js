const express = require('express');//require is used to import the express module
const connectDB =require("./config/db");
const tourRoutes = require("./routes/tourRoutes");
require(`dotenv`).config();
const app = express();//app is the express application
app.use(express.json());
const port = process.env.port;//port is the port number on which the server will run

connectDB()
const MyBio = {//prabuddha is the data object
    name: 'surajit',
    hometown: 'pingla',
    degree: 'B.Tech',
    email: 'surajit@gmail.com'
}

app.get('/me',(req, res)=>{//app.get is used to create a route
    res.status(200).json({//res.status is used to set the status code
        status: 'success',
        message: 'Data fetched successfully',
        data: MyBio
    })
})

const products = [
    {
    name: 'brush',
    quantity: '5',
    price: '20',
},
   
 {
    name: 'soap',
    quantity: '5',
    price: '50',
 },
 {
    name: 'spoon',
    quantity: '5',
    price: '50',
 },
]

app.get('/products',(req, res)=>{//app.get is used to create a route
    res.status(200).json({//res.status is used to set the status code
        status: 'success',
        message: 'Data fetched successfully',
        data: products
    })
})

app.post('/products',(req, res)=>{//app.get is used to create a route
    const products = req.body;
    console.log (products);


    res.status(201).json({//res.status is used to set the status code
        status: 'success',
        message: 'products created successfully',
        data: products
    })
})
app.use("/api/v1/tours", tourRoutes);

app.listen(port, () => {//app.listen is used to start the server
    console.log(`Server is running on port ${port}`);//console.log is used to print the message to the console
});



