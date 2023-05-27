const express = require('express');
const { connection } = require('./db');
const { loginRoute } = require('./routes/login.route');
const { signupRoute } = require('./routes/signup.route');


const app = express();

     app.use(express.json());

     app.use('/login',loginRoute)

    app.use('/signup',signupRoute)

app.listen(8080, async()=>{

    try{
        await connection
        console.log('server is running ')
    }catch(err){
        console.log(err);
    }
})