const express= require("express");

require(`dotenv`).config();

const app =express();
app.use(express.json());
const PORT =process.env.PORT;

const shatrajeet={
    name:"Shatrajeet",
    hometown:"Kolkata",
    degree:"B.Tech",
    email:"shatrajeet2005@gmail.com"
}

const allproducts=[
    {
    id:"product01",
    name:"Laptop",
    price:"3000",
    quantity:"20"
    },
    {
    id:"product02",
    name:"Mobile",
    price:"1000",
    quantity:"30"
    },
    {
    id:"product03",
    name:"TV",
    price:"5000",
    quantity:"10"
    }
]

app.get('/me',(req,res)=>{
    res.status(200).json({
        status:"success",
        message:"Data fetched successfully",
        data: shatrajeet
    })
})

app.get('/products',(req,res)=>{
    res.status(200).json({
        status:"success",
        message:"Data fetched successfully",
        data: allproducts
    })
})

app.post('/products',(req,res)=>{
    const product=req.body;
    console.log(product);
    res.status(201).json({
        status:"success",
        message:"Product created successfully",
        data: product
    })
})


app.listen ( PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});