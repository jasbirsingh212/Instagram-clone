import { Flex, Avatar, Text, VStack, Button } from "@chakra-ui/react";
import { useState } from "react";

const SuggestedUser = ({ name, followers, avatar }) => {
  const [isFollowed, setIsFollowed] = useState(false); // This should be dynamic based on the user's follow status
  return (
    <Flex alignItems={"center"} w={"full"} justifyContent={"space-between"}>
      <Flex alignItems={"center"} w={"full"} gap={2}>
        <Avatar src={avatar} name={name} size={"md"} />
        <VStack align={"start"} spacing={2}>
          <Text fontSize={"12"} fontWeight={"bold"}>
            {name}
          </Text>
          <Text fontSize={"11"} color={"gray.500"}>
            {`${followers} followers`}
          </Text>
        </VStack>
      </Flex>
      <Button
        fontSize={"13"}
        bg={"transparent"}
        p={0}
        h={"max-content"}
        onClick={() => setIsFollowed(!isFollowed)}
        fontWeight={"medium"}
        color={isFollowed ? "white" : "blue.400"}
        cursor={"pointer"}
        _hover={{ color: "white" }}
      >
        {isFollowed ? "Unfollow" : "Follow"}
      </Button>
    </Flex>
  );
};

export default SuggestedUser;
