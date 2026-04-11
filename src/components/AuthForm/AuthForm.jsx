import {
  Box,
  VStack,
  Image,
  Input,
  Button,
  Flex,
  Text,
} from "@chakra-ui/react";

import { useState } from "react";

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

          <Input placeholder="Email" fontSize={"14"} type="email" />
          <Input placeholder="Password" fontSize={"14"} type="password" />

          {!isLogin ? (
            <Input
              placeholder="Confirm Password"
              fontSize={"14"}
              type="password"
            />
          ) : null}

          <Button colorScheme={"blue"} w={"full"} fontSize={"14"} size={"sm"}>
            {isLogin ? "Log In" : "Sign Up"}
          </Button>

          <Flex
            gap={1}
            justifyContent={"center"}
            alignItems={"center"}
            w={"full"}
            my={4}
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

      <Box border={"1px solid gray"} borderRadius={"4"} padding={"5"}>
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
