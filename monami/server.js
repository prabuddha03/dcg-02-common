const express = require ('express');
require('dotenv').config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT;

const myDetails = {
    name: 'Monami',
    hometown: 'Kolkata',
    degree: 'BTech',
    email: 'monamisen23@gmail.com'
}

app.get('/me', (req,res) => {
    res.status(200).json({
        status:'success',
        message:'Data fetched successfully',
        data: myDetails
    })
});

const allproductDetails = [
    {
        productType:'mobile',
        brandname:'OnePlus'
    },
    {
        productType:'mobile', 
        brandname:'Apple'
    },
    {
        productType:'product3',
        brandname:'OnePlus'
    },


]

app.get('/products', (req,res) => {
    res.status(200).json({
        status:'success',
        message:'Products fetched successfully',
        data: allproductDetails
    })
});
app.post('/products',(req,res)=> {
    const product =req.body;
    console.log(product);


    res.status(201).json({
        status:'success',
        message:'Product created successfully',
        data: product

    }

    )
})


app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`);
});    