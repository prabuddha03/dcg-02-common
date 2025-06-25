const express = require('express');

require(`dotenv`).config();

const app = express();

app.use(express.json);
const PORT = process.env.PORT;


const mydetails = {
    name: 'arpita',
    hometown: 'Egra',
    degree: 'B.Tech',
    email: 'arpita@gmail.com'
}

const allproducts=[
    {
    id:'01',
    name:'computer'
    },

    {
    id:'02',
    name:'cpu'
    },
    {
    id:'03',
    name:'laptop'
    },

]

app.get('/me',(req, res)=>{
    res.status(200).json({
        status: "success",
        message: "Data fetched successfully",
        data: mydetails
    })

})

app.get('/products',(req, res)=>{
    res.status(200).json({
        status: "success",
        message: "Data fetched successfully",
        data: allproducts
    })

})

const products1=[
    {
    id:'01',
    name:'computer'
    },

    {
    id:'02',
    name:'cpu'
    },
    {
    id:'03',
    name:'laptop'
    },

]
app.post('/product',(req, res)=>{
    const product=req.body;
    console.log(product);

    res.status(201).json({
        status: "success",
        message: "product created successfully",
        data: product
    })
});


app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});