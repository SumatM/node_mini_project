const mongoose  = require('mongoose');


const userSchema = mongoose.Schema({
    username:String,
    email:String,
    DOB: String,
    Role:String,
    location:String,
    password:String
},{
    versionKey:false
})

const UserModal = mongoose.model('userlist',userSchema)


module.exports = {UserModal}