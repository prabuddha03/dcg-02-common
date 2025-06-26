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

const allProducts=[
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
        data: allProducts
    })
})

app.post('/products',(req,res)=>{
    const product=req.body;

    let a= allProducts.push(product);
    console.log (a);
    console.log(allProducts);

    res.status(201).json({
        status:"success",
        message:"Product created successfully",
        data: product
    })
})

app.get('/products/:id',(req,res)=>{
    const {id}=req.params;
    const product =allProducts[id];
    res.status(200).json({
        status:"success",
        message:"Data fetched successfully",
        data: product
    })
})

app.put('/products/:id',(req,res)=>{

    const newProduct=req.body;
    const {id}=req.params;

    allProducts[id]=newProduct;
    console.log(allProducts);
    
    res.status(200).json({
        status:"success",
        message:"Data edited successfully",
        data: allProducts[id]
    })
})

app.delete('/products/:id',(req,res)=>{

    const {id}=req.params;

    allProducts.splice(id,1);
    console.log(allProducts);
    
    res.status(204).json({
        status:"success",
        message:"Data deleted successfully",
    })
})

app.listen ( PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});