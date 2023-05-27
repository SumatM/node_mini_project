import { Box, Button, FormControl, FormHelperText, FormLabel, Heading, Input, Select } from "@chakra-ui/react";
import { useState } from "react";

export default function SignUp() {
  const [form, setFormdata] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    dob: "",
    role: "",
    location: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  console.log(form);

  function handleInput(e) {
    const { name, value } = e.target;
    setFormdata({ ...form, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(form);
  }

  function toggleShowPassword() {
    setShowPassword(!showPassword);
  }

  return (
    <Box>
      <Box width="50%" margin="auto">
        <FormControl w="70%" m="auto" border='1px solid' p='25px'>
          <FormLabel>Username</FormLabel>
          <Input type="text" name="username" onChange={handleInput} />
          <FormLabel>Email address</FormLabel>
          <Input type="email" name="email" onChange={handleInput} />
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
          <Input type="date" name="dob" onChange={handleInput} />
          <FormLabel>Role</FormLabel>
          <Select name="role" onChange={handleInput}>
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
