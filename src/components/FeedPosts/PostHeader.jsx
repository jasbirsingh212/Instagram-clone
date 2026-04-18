import { Avatar, Flex, Box, Text } from "@chakra-ui/react";

const PostHeader = ({ username, avatar }) => {
  return (
    <Flex
      justifyContent={"space-between"}
      alignItems={"center"}
      my={2}
      w={"full"}
    >
      <Flex alignItems={"center"} gap={2}>
        <Avatar size={"sm"} src={avatar} name="user profile picture" />
        <Flex fontSize={12} fontWeight={"bold"} gap={2}>
          <Text>{username}</Text>
          <Box color="gray.500">• 1w</Box>
        </Flex>
      </Flex>

      <Box cursor={"pointer"}>
        <Text
          fontSize={12}
          fontWeight={"bold"}
          color={"blue.500"}
          _hover={{ color: "white" }}
          transition={"0.2s ease-in-out "}
        >
          Unfollow
        </Text>
      </Box>
    </Flex>
  );
};

export default PostHeader;
