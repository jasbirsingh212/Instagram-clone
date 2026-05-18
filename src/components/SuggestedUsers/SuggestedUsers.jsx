import { Box, VStack, Flex, Text, Link } from "@chakra-ui/react";
import SuggestedUser from "./SuggestedUser";
import SuggestedHeader from "./SuggestedHeader";
import { suggestedUsers } from "../../assets/data.js";

const SuggestedUsers = () => {
  return (
    <VStack py={8} gap={4} px={6}>
      <SuggestedHeader />

      <Flex w={"full"} justifyContent={"space-between"} alignItems={"center"}>
        <Text fontSize={"12"} fontWeight={"bold"} color={"gray.500"}>
          Suggested for you
        </Text>
        <Box
          fontSize={"12"}
          fontWeight={"bold"}
          _hover={{ color: "gray.400" }}
          cursor={"pointer"}
        >
          See All
        </Box>
      </Flex>

      {suggestedUsers?.length > 0 &&
        suggestedUsers.map(({ name, followers, avatar }) => (
          <SuggestedUser
            key={name}
            name={name}
            followers={followers}
            avatar={avatar}
          />
        ))}

      <Box fontSize={"12"} color={"gray.500"} mt={5} alignSelf={"start"}>
        &copy; {new Date().getFullYear()} Instagram from{" "}
        <Link href="" target="_blank" fontSize={"14"} color={"blue.500"}>
          Jasbir Singh
        </Link>
      </Box>
    </VStack>
  );
};

export default SuggestedUsers;
