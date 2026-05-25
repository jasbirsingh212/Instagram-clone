import {
  GridItem,
  Flex,
  Text,
  Image,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Box,
  Avatar,
} from "@chakra-ui/react";
import { FaComment } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import { MdDelete } from "react-icons/md";

const ProfilePost = ({ img }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <GridItem
        cursor={"pointer"}
        borderRadius={"4"}
        overflow={"hidden"}
        border={"1px solid"}
        borderColor={"whiteAlpha.300"}
        position={"relative"}
        aspesRatio={"1/1"}
        onClick={onOpen}
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
          transition={"all 0.2s ease"}
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

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        size={{ base: "3xl", md: "5xl" }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody bg={"black"} pb={5}>
            <Flex
              gap={"4"}
              mx={"auto"}
              w={{ base: "90%", sm: "70%", md: "full" }}
            >
              <Box
                borderRadius={"4"}
                overflow={"hidden"}
                flex={1.5}
                border={"1px solid"}
                borderColor={"whiteAlpha.300"}
              >
                <Image
                  src={img}
                  alt="Post"
                  w={"100%"}
                  h={"100%"}
                  objectFit={"cover"}
                />
              </Box>
              <Flex
                flex={1}
                flexDirection={"column"}
                px={10}
                display={{ base: "none", md: "flex" }}
              >
                <Flex alignItems={"center"} justifyContent={"space-between"}>
                  <Flex alignItems={"center"} gap={4}>
                    <Avatar
                      src={"./profilepic.png"}
                      size={"sm"}
                      name="asaprogrammer"
                    />
                    <Text fontWeight={"bold"} fontSize={"12"}>
                      asaprogrammer_
                    </Text>
                  </Flex>
                  <Box
                    _hover={{ bg: "whiteAlpha.300", color: "red.600" }}
                    borderRadius={"4"}
                    p={1}
                    cursor={"pointer"}
                  >
                    <MdDelete size={20} cursor={"pointer"} />
                  </Box>
                </Flex>
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProfilePost;
