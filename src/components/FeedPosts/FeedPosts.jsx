import {
  Container,
  Box,
  SkeletonCircle,
  Skeleton,
  VStack,
  Flex,
  Text,
} from "@chakra-ui/react";
import FeedPost from "./FeedPost.jsx";
import { feedPosts } from "../../assets/data.js";
import { useState, useEffect } from "react";

const FeedPosts = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds loading time

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  return (
    <Container maxW={"container.sm"} py={10} px={2}>
      {isLoading &&
        feedPosts?.length > 0 &&
        feedPosts.map((post, id) => (
          <VStack key={id} gap={4} alignItems={"flex-start"} mb={10}>
            <Flex gap={2}>
              <SkeletonCircle size="10" />
              <VStack gap={2} alignItems={"flex-start"}>
                <Skeleton height="10px" w={"200px"} />
                <Skeleton height="10px" w={"200px"} />
              </VStack>
            </Flex>
            <Skeleton w={"full"}>
              <Box h={"500px"}>contents wrapped</Box>
            </Skeleton>
          </VStack>
        ))}

      {!isLoading &&
        feedPosts?.length > 0 &&
        feedPosts.map((post) => (
          <FeedPost
            key={post.username}
            img={post.img}
            username={post.username}
            avatar={post.avatar}
          />
        ))}
    </Container>
  );
};

export default FeedPosts;
