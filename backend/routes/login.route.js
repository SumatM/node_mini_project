const express = require('express');
const { UserModal } = require('../modal/user.modal');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const loginRoute = express.Router();

loginRoute.post('/',async(req,res)=>{

    const {email,password} = req.body
    
    try{
        let user = await  UserModal.find({email});
        if(user.length>0){
    // compare with the enter password 
            bcrypt.compare(password,user[0].password,(err,result) => {
                if(result){
    // genrate  token for authorization 
                    const token = jwt.sign({key:'tokenString'},"privateKey",{expiresIn: '7d'})
                    res.status(200).json({msg:"Login Sucesfull", token: token})

                }else{
                    res.status(400).json("Wrong Credentials")
                }
            })
        }else{
            res.status(400).send("Wrong Credntials")
        }
      

    }catch(err){
        res.status(400).json({error:err.message})
    }
})


module.exports = {loginRoute}