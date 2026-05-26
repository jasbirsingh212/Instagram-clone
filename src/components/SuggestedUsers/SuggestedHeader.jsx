import { Avatar, Flex, Link, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const SuggestedHeader = () => {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex gap={2} alignItems={"center"}>
        <Avatar size={"lg"} src="./profilepic.png" name={"as a programmer"} />
        <Text fontSize={"12"} fontWeight={"bold"}>
          as a programmer
        </Text>
      </Flex>
      <Link
        as={RouterLink}
        fontSize={"14"}
        fontWeight={"medium"}
        color={"blue.400"}
        cursor={"pointer"}
        style={{ textDecoration: "none" }}
        to="/auth"
      >
        Log out
      </Link>
    </Flex>
  );
};

export default SuggestedHeader;
