const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')



const auth = (req,res,next) => {


  const token = req.headers.authorization.split(' ')[1]

 if(token){
    try{
        let decode = jwt.verify(token,"privateKey")
        console.log(decode);
        if(decode){
            next()
        }else{
            res.status(400).send("wrong token provided")
        }
    }catch(err){
        res.send(400).json(err.message)
    }
   
 }else{
    res.status(400).json("Please Login In")
 }

}