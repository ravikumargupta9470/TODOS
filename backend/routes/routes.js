const express=require("express");
const app=express();
require("dotenv").config();
const user=require('../model/userModel');
const mongoose=require("mongoose");
app.use(express.json());
const router=express.Router();

router.post("/",async (req,res)=>{
    try{
    
    
        
        const{name,email,age}=req.body;
    
    // const userdata=await user.create({name,email,age});
    
    const userdata=await user.create({name:name,email:email,age:age});
    if(userdata)
    {
        res.status(200).json({
            success:true,
            data: userdata,
            message:"data added"
        })
    }
    
    }
    catch(err){
    
        res.status(500).json({
            success:false,
            message:"faild to save data"
        })
    
    }
    })
    router.get("/",async (req,res)=>{
        try{
        
        
            
          
        
        // const userdata=await user.create({name,email,age});
        
        const userdata=await user.find();
        if(userdata)
        {
            res.status(200).json({

                data:userdata,
                message:"fetch data success"
            })
        }
        
        }
        catch(err){
        
            res.status(500).json({
                success:false,
                message:"faild to get data"
            })
        
        }
        })

        router.get("/:id",async (req,res)=>{
            try{
            
            
                
              
            const {id}=req.params;
            console.log(id);
            // const userdata=await user.create({name,email,age});
            
            const userdata=await user.findById({_id:id});
            if(userdata)
            {
                res.status(200).json({
                    success:true,
                    data: userdata,
                    message:"data get by id "
                })
            }
            
            }
            catch(err){
            
                res.status(500).json({
                    success:false,
                    message:"faild to get  data by id"
                })
            
            }
            })
            router.delete("/:id",async (req,res)=>{
                try{
                
                
                    
                  
                const {id}=req.params;
                console.log(id);
                // const userdata=await user.create({name,email,age});
                
                const userdata=await user.findByIdAndDelete({_id:id});
                if(userdata)
                {
                    res.status(200).json({
                        success:true,
                        data: userdata,
                        message:"data get by id  and dseted"
                    })
                }
                
                }
                catch(err){
                
                    res.status(500).json({
                        success:false,
                        message:"faild to get  data by id not deleted"
                    })
                
                }
                })


                router.patch("/:id",async (req,res)=>{
                    try{
                    
                    
                        
                      
                    const {id}=req.params;
                    // console.log(id);
                    const{name,email,age}=req.body;
                    console.log(name,email,age);
    
                    // const userdata=await user.create({name,email,age});
                    
                    const userdata=await user.findByIdAndUpdate(id,req.body,{new:true});
                    if(userdata)
                    {
                        res.status(200).json({
                            success:true,
                            data: userdata,
                            message:"data get by id "
                        })
                    }
                    
                    }
                    catch(err){
                    
                        res.status(500).json({
                            success:false,
                            message:"faild to get  data by id"
                        })
                    
                    }
                    })
    module.exports=router;
    