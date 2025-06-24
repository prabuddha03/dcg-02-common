const express = require('express');    //requird for

const app = express();
const port = 3000;

const suhas = {
    name: 'suhas',
    hometown: 'Fatepur',
    degree: 'B.Tech',
    email: 'suhas@gmail.com'
}

app.get('/me',(req, res)=>{
    res.status(200).json({
        status: 'success',
        message: 'data featched successfully',
        data: suhas
    })
})

app.listen(3000, () => {
    console.log(`server is running on port ${port}`);
});
