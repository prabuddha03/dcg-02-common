const express = require("express");
require('dotenv').config();
const app = express();
app.use(express.json());
const PORT= process.env.PORT;
// const mydetails = {
//   name: "Roni",
//   hometown: "Falta",
//   degree: "B.Tech",
//   email: "arkadyutisamanta@gmail.com" 
// }
// app.get('/me',(req,res)=>{
//   res.status(200).json({
//     status: "sucess",
//     message: "Data fetched sucessfully",
//     data: mydetails
//   })
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);  
// });
 const product= [
{
    name:"Product1",
    id: 1,
    model: "Mobile"
  },
  {
    id:2,
    name: "Laptop"
  },
  {
    id:3,
    name:"Bag"
  }
];
app.post('/products',(req,res)=>{
  const product=req.body;
  console.log(product);
  res.status(201).json({
    status: "sucess",
    message: "Data fetched sucessfully",
    data: product
  })
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);  
});