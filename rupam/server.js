const express = require('express');
require('dotenv').config();

const app =express();
app.use(express.json());

const PORT=process.env.PORT;


const myDetails ={
    name:'rupam',
    hometown:'diamond',
    degree:'BTech'
}
app.get('/me',(req,res) =>{
    res.status(200).json({
        status:'success',
        messege:'Data fethed successfully',
        data: myDetails 

    })
})

const allproducts =[
       {
            pid:1,
            name:'ball',
            price:2000
        },
       {
            pid:2,
            name:'cycle',
            price:3000
        },
        {
            pid:3,
            name:'phone',
            price:5000
        }
        
   
    ]
app.get('/products',(req,res) =>{
    res.status(200).json({
        status:'success',
        messege:'Data fethed successfully',
        data: allproducts 

    })

});
app.post('/products',(req,res) =>{
    const product =req.body;
    console.log(product);


    res.status(200).json({
        status:'success',
        messege:'Data fethed successfully',
        data: product

    })
    




});
  app.listen(PORT, () => {
    console.log(`Server is running port ${PORT}`);
  })
