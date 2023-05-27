import { Alert, AlertIcon, Box, Button, FormControl, FormLabel, Heading, Input } from "@chakra-ui/react";
import { useState } from "react";
import {useSelector,useDispatch} from 'react-redux'
import { loginFetch } from "../reducer/action";
import {useNavigate} from 'react-router-dom'

export default function Login(){

    const [form,setFormdata] = useState({email:"",password:""})

    const store = useSelector((stor)=> stor)
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [flag,setflag] = useState(true)

    function handleinput(e) {
        let {name,value} = e.target;

        if(name=="email"){
            setFormdata({...form,email:value})
        }else{
            setFormdata({...form,password:value})
        }
    }

    function handleSubmit(e){
        e.preventDefault();
       dispatch( loginFetch(form))
    }

    if(store.isAuth && flag){
        console.log('login')
        setTimeout(() => {
            setflag(false)
           navigate('/') 
        }, 3000);
    }



    return (
        <Box>
        { store.isAuth ?  <Alert status='success'>
            <AlertIcon />
        Congratulations! { store.user[0].username } LogIn Successful
        </Alert> : false}

            <Box width="50%" margin='auto' mt='25px'>
            <FormControl w='70%' m='auto'  p='25px' border='1px solid'>
            <FormLabel>Email address</FormLabel>
            <Input type='email' name="email" onChange={handleinput}/>
            <FormLabel>Password</FormLabel>
            <Input type='password' name='password' onChange={handleinput}/>
            <Box>
                <Button  mt='15px' border='1px solid' type='submit' name='LogIn' onClick={handleSubmit}>LogIn</Button>
            </Box>
            </FormControl>
            </Box>
        </Box>
    )
}