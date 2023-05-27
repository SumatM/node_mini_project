const express = require('express');
const { UserModal } = require('../modal/user.modal');
const bcrypt = require('bcrypt')



const signupRoute = express.Router();

signupRoute.post("/",async(req,res)=>{
    const {password} = req.body;
    try{
     
     bcrypt.hash(password,5,async(err,hash)=>{
        let user = new UserModal({...req.body,password:hash})
       await user.save();
     res.status(200).json({message:"User Added",user})
     })

    }catch(err){
        res.status(400).json({err:err.message})
        console.log(err);
    }
})


module.exports = {signupRoute}