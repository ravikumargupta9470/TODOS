const express=require("express");
const app=express();
require("dotenv").config();
const user=require('./model/userModel');
const mongoose=require("mongoose");
app.use(express.json());
const cors=require("cors");
app.use(cors());

const rout=require('./routes/routes');
mongoose.connect(process.env.URL)
.then(()=>{
    console.log("db connected");
}).catch((err)=>{
    console.log("Error in connetced");
})
app.get('/',(req,res)=>{
    res.send("api run");
});
app.listen(process.env.PORT,()=>{

    console.log("server is runing ");

});
app.use("/api",rout);
//api

