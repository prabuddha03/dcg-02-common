const express = require('express');

const app = express();
const port = 3000;

const Raj = {
    name: 'Raj',
    hometown: 'kolkata',
    degree: 'B.Tech',
    email: 'rajkrishna001@gmail.com' 
}

app.get('/me',(req, res)=>{
    res.status(200).json({
        status: 'success',
        message: 'Data fetched successfully',
        data: Raj
    })
});

app.listen(3000, () => {
    console.log(`Server is running on port ${port}`);
});