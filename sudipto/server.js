const express = require('express');

const app = express();
const port = 3000;

const sudipto = {
    name: "Sudipto",
    hometown: "Kolkata",
    degree: "B.Tech",
    email: "sudipto@gmail.com"

}

app.get ('/me', (req, res) =>{
    res.status(200).json({
        status: "success",
        message: "Data fetched successfully",
        data: sudipto
    })
}) 

app.listen(port, () =>{
    console.log(`Server is running on port ${port}`);
});