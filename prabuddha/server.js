const express = require('express');//require is used to import the express module

const app = express();//app is the express application
const port = 3000;//port is the port number on which the server will run

const prabhat = {//prabhat is the data object
    name: 'prabhat',
    hometown: 'Durgapur',
    degree: 'B.Tech',
    email: 'prabhat@gmail.com'
}

app.get('/me',(req, res)=>{//app.get is used to create a route
    res.status(200).json({//res.status is used to set the status code
        status: 'success',
        message: 'Data fetched successfully',
        data: prabhat
    })
})

app.listen(port, () => {//app.listen is used to start the server
    console.log(`Server is running on port ${port}`);//console.log is used to print the message to the console
});