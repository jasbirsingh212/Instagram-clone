import { Flex, Avatar, Text } from "@chakra-ui/react";

const Comment = ({ createdAt, username, profilePic, comment }) => {
  return (
    <Flex gap={4} flex={1}>
      <Avatar src={profilePic} size={"sm"} name={username} />
      <Flex direction={"column"}>
        <Flex gap={2}>
          <Text fontWeight={"bold"} fontSize={"12"}>
            {username}
          </Text>
          <Text fontSize={"14"}>{comment}</Text>
        </Flex>
        <Text fontSize={"12"} color={"gray"}>
          {createdAt}
        </Text>
      </Flex>
    </Flex>
  );
};

export default Comment;
