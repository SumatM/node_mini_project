const mongoose = require('mongoose')
require('dotenv').config()


const connection = mongoose.connect(process.env.LINK)


module.exports = {connection}