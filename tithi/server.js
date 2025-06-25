const express= require ("express");
require ('dotenv').config();
const app = express();
app.use(express.json());
const PORT = process.env.PORT;
const productsdata = [

   {name:"mobile",
   id:"345",
   price:"50000"
   },

   



    {name:"laptop",
    id:"546",
    price:"60000",
   },
   


   { name:"ipad",
    id:"768",
    price:"89000",
   }
];

app.post('/products',(req,res)=> {
    const productsdata = req.body;
    console.log(productsdata);
    res.status(201).json({
        status:"success",
        message: "Data feched successfully",
        data: productsdata
}
)
});
app.listen(PORT, ()=> {
    console.log(`server on running on port ${PORT}`);
});

