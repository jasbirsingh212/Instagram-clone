import {
  Avatar,
  AvatarGroup,
  Flex,
  Text,
  VStack,
  Button,
} from "@chakra-ui/react";

const ProfileHeader = () => {
  return (
    <Flex
      gap={{ base: 4, sm: 10 }}
      py={10}
      direction={{ base: "column", sm: "row" }}
    >
      <AvatarGroup
        size={{ base: "xl", md: "2xl" }}
        mx={"auto"}
        justifySelf={"center"}
        alignSelf={"flex-start"}
      >
        <Avatar
          src="./profilepic.png"
          name="As a programmer"
          alt={"As a programmer logo"}
        />
      </AvatarGroup>
      <VStack alignItems={"start"} gap={2} mx={"auto"} flex={1}>
        <Flex
          gap={4}
          direction={{ base: "column", sm: "row" }}
          alignItems={"center"}
          justifyContent={{ base: "center", sm: "flex-start" }}
          w={"full"}
        >
          <Text fontSize={{ base: "sm", sm: "lg" }}>As_a_programmer_</Text>
          <Flex alignItems={"center"} justifyContent={"center"} gap={4}>
            <Button
              size={{ base: "xs", md: "sm" }}
              bg={"white"}
              color={"black"}
              _hover={{ bg: "whiteAlpha.800" }}
            >
              Edit Profile
            </Button>
          </Flex>
        </Flex>

        <Flex alignItems={"center"} gap={{ base: 2, sm: 4 }}>
          <Text fontSize={{ base: "xs", md: "sm" }}>
            <Text as={"span"} fontWeight={"bold"} mr={1}>
              100
            </Text>{" "}
            Posts
          </Text>
          <Text fontSize={{ base: "xs", md: "sm" }}>
            <Text as={"span"} fontWeight={"bold"} mr={1}>
              1000
            </Text>{" "}
            Followers
          </Text>
          <Text fontSize={{ base: "xs", md: "sm" }}>
            <Text as={"span"} fontWeight={"bold"} mr={1}>
              500
            </Text>{" "}
            Following
          </Text>
        </Flex>
        <Flex alignItems={"center"} gap={4}>
          <Text fontSize={"sm"} fontWeight={"bold"}>
            As a programmer
          </Text>
        </Flex>
        <Text fontSize={"sm"}>
          {" "}
          Tutorials that are meant to help beginners learn programming.
        </Text>
      </VStack>
    </Flex>
  );
};

export default ProfileHeader;
