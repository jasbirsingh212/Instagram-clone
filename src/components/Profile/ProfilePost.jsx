import { GridItem, Flex, Text, Image } from "@chakra-ui/react";
import { FaComment } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
``;

const ProfilePost = ({ img }) => {
  return (
    <GridItem
      cursor={"pointer"}
      borderRadius={"4"}
      overflow={"hidden"}
      border={"1px solid"}
      borderColor={"whiteAlpha.300"}
      position={"relative"}
      aspesRatio={"1/1"}
    >
      <Flex
        opacity={"0"}
        _hover={{ opacity: "1" }}
        position={"absolute"}
        top={0}
        left={0}
        right={0}
        bottom={0}
        justifyContent={"center"}
        bg={"blackAlpha.700"}
        zIndex={1}
        transition={"all 0.3s ease"}
      >
        <Flex alignItems={"center"} gap={50} justifyContent={"center"}>
          <Flex>
            <AiFillHeart size={20} />
            <Text fontWeight={"bold"} ml={2}>
              7
            </Text>
          </Flex>
          <Flex>
            <FaComment size={20} />
            <Text fontWeight={"bold"} ml={2}>
              7
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Image src={img} alt="Post" w={"100%"} h={"100%"} objectFit={"cover"} />
    </GridItem>
  );
};

export default ProfilePost;
