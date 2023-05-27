const express = require('express');
const { UserModal } = require('../modal/user.modal');
const { loginAuth } = require('../middleware/loginAuth.middle.ware');
const { userLogger } = require('../middleware/userLogger.middleware');

const loginRoute = express.Router();

loginRoute.post('/',loginAuth,userLogger,async(req,res)=>{
    const {token,user} = req.body
    res.status(200).json({msg:"Login Sucesfull", token: token,user:user})
})


module.exports = {loginRoute}