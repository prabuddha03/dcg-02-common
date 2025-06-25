const express = require('express');
require('dotenv').config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT;

const allproduct=[
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
app.post('/products',(req,res)=>{
    const product = req.body;
    console.log(product);

res.status(200).json({
    status:'success',
    message:'Data fetched succesfully',
    data:product
   })
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});