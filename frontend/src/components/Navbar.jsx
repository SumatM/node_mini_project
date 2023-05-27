import { Box, Flex, Heading, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

export default function Navbar() {
  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      p={4}
      
    >
      <Box>
        <Heading size="md" mr={4}>
          <Link as={RouterLink} to="/" _hover={{ textDecoration: "none" }}>
            Authentication Mini Project
          </Link>
        </Heading>
      </Box>

      <Flex 
      align="center"
      justify="space-between"
      p={4}
      w='60%'
      >

      <Box>
      <Link
              as={RouterLink}
              to="/"
              mr={4}
              _hover={{ textDecoration: "none" }}
            >
             <Heading size='md'>Home</Heading>
            </Link>
      </Box>
      <Box>
      <Link
              as={RouterLink}
              to="/about"
              mr={4}
              _hover={{ textDecoration: "none" }}
            >
              
              <Heading size='md'>About</Heading>
            </Link>
      </Box>
      <Box>
      <Link
              as={RouterLink}
              to="/login"
              mr={4}
              _hover={{ textDecoration: "none" }}
            >
              
              <Heading size='md'>LogIn</Heading>
            </Link>
      </Box>
      <Box>
      <Link
              as={RouterLink}
              to="/signup"
              mr={4}
              _hover={{ textDecoration: "none" }}
            >
              
              <Heading size='md'>SignUp</Heading>
            </Link>
      </Box>
      </Flex>
    </Flex>
  );
}
