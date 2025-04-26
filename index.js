const express = require('express');
const ProductRoute = require('./routes/products.route.js');
const customerRouters = require('./routes/customers.route.js');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

// Middlewear to convert the json
const app = express();
app.use(express.json());

app.use('/api/products',ProductRoute);
app.use('/api/customers',customerRouters);

console.log("hello world");

//mongoDB connection
 mongoose.connect(process.env.MONGO)
 .then(()=>console.log("Connected!!!!"))
 .catch((error)=>
{
    console.error("Connection error:", error);
});

//To check env file is working
console.log("PORT :" , process.env.PORT);

//sample route
app.get('/api',(req,res)=>{
 res.send("API is working....");
 console.log("API is working");
});

//Listen to this port
app.listen(process.env.PORT,()=>{
    console.log("App is running at ",process.env.PORT);
})
