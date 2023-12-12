const express= require("express");

const app=express();

require('dotenv').config()

const dbConfig=require('./config/dbconfig')






app.listen(8002,()=>{
    
    console.log("hiii");
})