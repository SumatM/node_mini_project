const fs = require('fs')
const mongoose = require('mongoose');
const { UserModal } = require('../modal/user.modal');


async function userLogger(req,res,next){

const {email,username,Role,location} = req.body.user[0]

try{
    const user = await UserModal.find({email})
    let data = ` Username:${username} Role:${Role}\n`
    const write = fs.appendFileSync('./log.txt',data,'utf-8')
    console.log(write)
    req.body.user= {email,username,Role,location}
        next();
}catch{

}



}

module.exports = {userLogger}