const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {UserModal} = require('./../modal/user.modal')

const loginAuth = async(req,res,next) =>{
    const {email,password} = req.body
    try{
        let user = await  UserModal.find({email});
        if(user.length>0){
    // compare with the enter password 
            bcrypt.compare(password,user[0].password,(err,result) => {
                if(result){
    // genrate  token for authorization 
                    const token = jwt.sign({key:'tokenString'},"privateKey",{expiresIn: '7d'})
                    req.body = ({token:token,user:user})
                    next();

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
}


module.exports = {loginAuth}