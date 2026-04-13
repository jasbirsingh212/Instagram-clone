import {
  Box,
  VStack,
  Image,
  Input,
  Button,
  Flex,
  Text,
} from "@chakra-ui/react";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  const [inputValues, setInputValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleLogin = () => {
    // Implement login logic here
    if (isLogin && inputValues.email && inputValues.password) {
      console.log("Logging in with:", inputValues);
      setIsAuthenticated(true);
    } else {
      alert("Please fill in all fields for login.");
    }
  };

  const handleSignUp = () => {
    // Implement sign-up logic here
    if (
      !isLogin &&
      inputValues.email &&
      inputValues.password &&
      inputValues.confirmPassword
    ) {
      inputValues.password === inputValues.confirmPassword
        ? (console.log("Signing up with:", inputValues),
          setIsAuthenticated(true))
        : alert("Passwords do not match.");
    } else {
      alert("Please fill in all fields for sign-up.");
    }
  };

  const handleAuth = () => {
    isLogin ? handleLogin() : handleSignUp();
    // Navigate to home page after successful login/sign-up
  };

  useEffect(() => {
    if (isAuthenticated) {
      alert("Authentication successful!");
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  return (
    <>
      <Box border={"1px solid gray"} borderRadius={4} p={5}>
        <VStack spacing={4}>
          <Image
            src="/logo.png"
            h={"24"}
            cursor={"pointer"}
            alt="Instagram Logo"
          />

          <Input
            placeholder="Email"
            name="email"
            fontSize={"14"}
            type="email"
            value={inputValues.email}
            onChange={handleInputChange}
          />
          <Input
            placeholder="Password"
            fontSize={"14"}
            name="password"
            type="password"
            value={inputValues.password}
            onChange={handleInputChange}
          />

          {!isLogin ? (
            <Input
              placeholder="Confirm Password"
              fontSize={"14"}
              name="confirmPassword"
              type="password"
              value={inputValues.confirmPassword}
              onChange={handleInputChange}
            />
          ) : null}

          <Button
            colorScheme={"blue"}
            w={"full"}
            fontSize={"14"}
            size={"sm"}
            onClick={handleAuth}
          >
            {isLogin ? "Log In" : "Sign Up"}
          </Button>

          <Flex
            gap={1}
            justifyContent={"center"}
            alignItems={"center"}
            w={"full"}
            my={2}
          >
            <Box h={"1px"} bg={"gray.400"} flex={2} />
            <Text mx={1} or={"white"}>
              OR
            </Text>
            <Box h={"1px"} bg={"gray.400"} flex={2} />
          </Flex>

          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            cursor={"pointer"}
          >
            <Image src="/google.png" w={"5"} alt="Google Icon" />
            <Text mx={"2"} color={"blue.500"}>
              Continue with Google
            </Text>
          </Flex>
        </VStack>
      </Box>

      <Box border={"1px solid gray"} borderRadius={"4"} padding={"3"}>
        <Flex alignItems={"center"} justifyContent={"center"}>
          <Box mx={2} fontSize={"14"}>
            {isLogin ? "Don't have an account?" : "Already have an account?"}
          </Box>
          <Box
            color={"blue.500"}
            cursor={"pointer"}
            onClick={() => setIsLogin(!isLogin)}
            mb={1}
          >
            {isLogin ? "Sign Up" : "Log In"}
          </Box>
        </Flex>
      </Box>
    </>
  );
};
export default AuthForm;
