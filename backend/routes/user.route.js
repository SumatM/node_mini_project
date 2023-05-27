const express = require('express')
const mongoose = require('mongoose')
const { UserModal } = require('../modal/user.modal')


const userRoute = express.Router()

userRoute.get('/',async(req,res)=>{
    try{
        const users = await UserModal.find();
         res.status(200).send(users)

    }catch(err){
        res.status(400).json({erro:err})
    }
})

module.exports={userRoute}