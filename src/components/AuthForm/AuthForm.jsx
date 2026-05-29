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
import Login from "./Login";
import SignUp from "./SignUp";
import GoogleAuth from "./GoogleAuth";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

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

          {isLogin ? <Login /> : <SignUp />}

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

          <GoogleAuth />
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
