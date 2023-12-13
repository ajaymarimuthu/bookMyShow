const express= require("express");

const app=express();

require('dotenv').config()

const dbConfig=require('./config/dbconfig')
const userRoute= require('./routes/userRoute.js');


app.use(express.json())

app.use('/',userRoute);


app.listen(8002,()=>{
    
    console.log("hiii");
})