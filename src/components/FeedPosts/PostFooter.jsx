import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import {
  CommentLogo,
  NotificationsLogo,
  UnLikeLogo,
} from "../../assets/constants.jsx";

const PostFooter = ({ username, isProfilePage }) => {
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(100);
  const [comments, setComments] = useState(20);

  const handleLike = () => {
    if (!liked) {
      setLiked(true);
      setLikesCount(likesCount + 1);
    } else {
      setLiked(false);
      setLikesCount(likesCount - 1);
    }
  };

  return (
    <Box mb={isProfilePage ? 0 : 10} marginTop={"auto"}>
      <Flex alignItems={"center"} gap={4} w={"full"} pt={0} mb={2} mt={"4"}>
        <Box onClick={handleLike} cursor={"pointer"} fontSize={18}>
          {!liked ? <NotificationsLogo /> : <UnLikeLogo />}
        </Box>

        <Box fontSize={18} cursor={"pointer"}>
          <CommentLogo />
        </Box>
      </Flex>

      <Text fontSize={14} fontWeight={"600"}>
        {likesCount} likes
      </Text>
      {!isProfilePage && (
        <>
          <Text fontSize={"sm"} fontWeight={"700"}>
            {username}
            {"  "}
            <Text as={"span"} ml={1} fontSize={"xs"} fontWeight={"400"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
              dicta!{" "}
            </Text>
          </Text>
          <Text fontSize={"sm"} color={"gray"}>
            View all {comments} comments
          </Text>
        </>
      )}

      <Flex
        alignItems={"center"}
        gap={2}
        justifyContent={"space-between"}
        w={"full"}
      >
        <InputGroup>
          <Input
            variant={"flushed"}
            placeholder="Add a comment..."
            fontSize={14}
          />

          <InputRightElement>
            <Button
              fontSize={14}
              color={"blue.500"}
              fontWeight={"600"}
              cursor={"pointer"}
              _hover={{ color: "white" }}
              bg={"transparent"}
            >
              Comment
            </Button>
          </InputRightElement>
        </InputGroup>
      </Flex>
    </Box>
  );
};

export default PostFooter;
