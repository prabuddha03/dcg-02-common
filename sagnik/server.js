const express = require('express');

const app = express();
const port = 3000;

const Sagnik = {
    name:'sagnik',
    degree:'B.tech',
    email:'sagnik99333@gmail.com'
}

app.get('/me',(req, res)=>{
    res.status(200).json({
        status:'success',
        message:'Data fetched succesfully',
        data:Sagnik
    })
})


app.listen(3000,()=>{

    console.log(`Server is running on port ${port}`);
})