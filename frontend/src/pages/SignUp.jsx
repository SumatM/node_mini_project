import { Alert, AlertIcon, Box, Button, FormControl, FormHelperText, FormLabel, Heading, Input, Select, Spacer, Text } from "@chakra-ui/react";
import { useState } from "react";
import { SignUpFetch } from "../reducer/action";
import {useDispatch,useSelector} from 'react-redux'
import { CloseIcon } from '@chakra-ui/icons'


export default function SignUp() {
  const [form, setFormdata] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword:'',
    DOB: "",
    Role: "",
    location: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();

  const store = useSelector((store)=>store)


  const [error,seterr] = useState({err:false,message:''})

  const [showAlert, setShowAlert] = useState(true);

  if(store.err){
    seterr(store.err.message)
  }

  function handleInput(e) {
    const { name, value } = e.target;
    setFormdata({ ...form, [name]: value });
  }

  

  function handleSubmit(e) {

    e.preventDefault();
    setShowAlert(true);
    const {username,email,DOB,Role,location,password,confirmPassword} = form
    
    if (!email || !username || !DOB || !Role || !location) {
      seterr({err:true,message:"Please fill in all the fields"})
      console.log("Please fill in all the required fields");
      return;
    }

    //console.log(password.length < 8 , (password!==confirmPassword))

    if (password.length < 8) {
      seterr({err:true,message:"Password should be at least 8 characters"})
      console.log("Password should be at least 8 characters");
      return;
    }

    if (password!==confirmPassword) {
      seterr({err:true,message:"Confirm Password is not Matching"})
      console.log("Confirm Password is not Matching");
      return;
    }
    console.log(store.signup)
    if(!store.signup){
      //console.log(store.res)
      seterr({...error,message:store.res.message})
    }
    dispatch(SignUpFetch(form))
    
  }

  function toggleShowPassword() {
    setShowPassword(!showPassword);
  }

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <Box mb='100px'>
    <Text>{showAlert ?  (store.signup ? <Alert status='success' onClick={handleCloseAlert}>
    <AlertIcon />
   Congratulations! { form.username } Sign Up successful<Spacer/><CloseIcon/>
  </Alert> : error.err ? <Alert status='error' onClick={handleCloseAlert}>
    <AlertIcon />
  {error.message}<Spacer/><CloseIcon/>
  </Alert> : false) : false}</Text>
      <Box width="50%" margin="auto" mt='25px'>
        <FormControl w="70%" m="auto" border='1px solid' p='25px'>
          <FormLabel>Username</FormLabel>
          <Input type="text" name="username" onChange={handleInput} />
          <FormLabel>Email address</FormLabel>
          <Input type="email" name="email" onChange={handleInput} isRequired/>
          <FormLabel>Password</FormLabel>
          <Input
            type={showPassword ? "text" : "password"}
            name="password"
            onChange={handleInput}
          />
          <FormLabel>Confirm Password</FormLabel>
          <Input
            type={showPassword ? "text" : "password"}
            name="confirmPassword"
            onChange={handleInput}
          />
          <Box display="flex" alignItems="center">
            <FormLabel>Show Password</FormLabel>
            <input  type='checkbox' onChange={toggleShowPassword}/>
          </Box>

          <FormLabel>Date of Birth</FormLabel>
          <Input type="date" name="DOB" onChange={handleInput} />
          <FormLabel>Role</FormLabel>
          <Select name="Role" onChange={handleInput}>
            <option value="">Select Role</option>
            <option value="Admin">Admin</option>
            <option value="Explorer">Explorer</option>
          </Select>
          <FormLabel>Location</FormLabel>
          <Input type="text" name="location" onChange={handleInput} />
          <Box mt={4}>
            <Button type="submit" name="SignUp" onClick={handleSubmit} border='1px solid'>
              Sign Up
            </Button>
          </Box>
        </FormControl>
      </Box>
    </Box>
  );
}
