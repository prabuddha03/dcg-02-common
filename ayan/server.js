const express =require("express");
require(`dotenv`).config();
const app = express();
app.use(express.json());
const PORT = process.env.PORT;

const ayan={
    name:"ayan",
    hometown:"diamond",
    degree:"B.Tech",
    email:"ayansamanta545@gmail.com"
}
 const allproduct = [
  {
    id: 1,
    name: "Mobile"
  },
  {
    id:2,
    name: "Laptop"
  },
  {
    id:3,
    name:"Bag"
  }
]

app.get(`/me`,(req,res)=>{
    res.status(200).json({
        status:"success",
        message:"data fetched successfully",
        data:ayan
    })
})
app.get('/root',(req,res)=>{
  res.status(200).json({
    status: "sucess",
    message: "Data fetched sucessfully",
    data: allproduct
  })
});
app.post('/root',(req,res)=>{
    const product = req.body;
    console.log(product);
     res.status(201).json({
    status: "sucess",
    message: "Data fetched sucessfully",
    data: product
  })
})


app.listen (PORT,()=>{
    console.log(`server is running on port ${PORT}`);
});