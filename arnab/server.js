const express = require('express');//require is used to import the express module
require(`dotenv`).config();//dotenv is used to load environment variables from a .env file
const app = express();
app.use(express.json());

const port = process.env.PORT;

const player = [
    {
    name: 'rohit',
    hometown:'mumbai', 
    playfor: 'mumbai',
    email:'rohitsharma45@icloud.com'
},
{
    name: 'hardik',
    hometown:'Mumbai', 
    playfor: 'mumbai',
    email:'hardikpandya33@icloud.com'
},

{
    name: 'virat',
    hometown:'punjub', 
    playfor: 'bangalor',
    email:'virakholi18@icloud.com'
},
]



app.get('/players',(req, res)=>{
    res.status(200).json({
        status: 'success',
        message: 'Data Fetched Succesfuly',
        data: player
    })
})
app.post('/players',(req, res)=>{
    const newPlayer = req.body;
    console.log(newPlayer);
    res.status(201).json({
        status: 'success',
        message: 'Data Added Succesfuly',
        data: player
    })
})



app.listen(port, () => {//listen is used to start the server
  console.log(`Server is running on ${port}`);//log the message to the console
});