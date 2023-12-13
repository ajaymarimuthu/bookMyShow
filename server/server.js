const express= require("express");
var cors = require('cors');

const app=express();


require('dotenv').config();

const dbConfig=require('./config/dbconfig.js');
const userRoute= require('./routes/userRoute.js');

app.use(cors());
app.use(express.json())
app.use('/api/users',userRoute);


app.listen(8002,()=>{    
    console.log("hiii");
})