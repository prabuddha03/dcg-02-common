const express = require('express');
require('dotenv').config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT;

const myDetails = {
    name: 'sujan',
    hometwon: 'sarisha',
    degree: 'B.tech',
    email: 'sujanhaldar.108@gmail.com'
}

app.get('/me',(req,res) => {
    res.status(200).json({
        status: 'success', 
        message:'data fetched successfully',
        data: myDetails

    })
});

const allmyProduct = {
    product1:{
        id:1,
        name: "mobile"
    },
    product2:{
        id:2,
        name:"bag"
    },
    product3:{
        id:3,
        name: "laptop"
    },

    }
    



// app.('/product',(req, res) => {
//     res.status(200).json({
//         status: 'success', 
//         message:'data fetched successfully',
//         data: allmyProduct

//     })
// });
app.post('/product',(req,res) => {
    const allmyProduct = req.body;
    console.log(allmyProduct);

    res.status(201).json({
        status: 'success', 
        message:'data fetched successfully',
        data: allmyProduct

    })
});

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});