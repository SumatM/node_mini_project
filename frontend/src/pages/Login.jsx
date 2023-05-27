import { Box, Button, FormControl, FormLabel, Heading, Input } from "@chakra-ui/react";
import { useState } from "react";
import {useSelector,useDispatch} from 'react-redux'

export default function Login(){

    const [form,setFormdata] = useState({email:"",password:""})

    const store = useSelector((stor)=> stor)
    console.log(store)

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
        console.log(form);
    }



    return (
        <Box>
            <Heading>Login</Heading>
            <Box width="50%" margin='auto'>
            <FormControl w='70%' m='auto' >
            <FormLabel>Email address</FormLabel>
            <Input type='email' name="email" onChange={handleinput}/>
            <FormLabel>Password</FormLabel>
            <Input type='password' name='password' onChange={handleinput}/>
            <Box>
                <Button type='submit' name='LogIn' onClick={handleSubmit}>LogIn</Button>
            </Box>
            </FormControl>
            </Box>
        </Box>
    )
}