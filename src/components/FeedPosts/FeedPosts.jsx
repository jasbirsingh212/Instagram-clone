import { Container } from "@chakra-ui/react";
import FeedPost from "./FeedPost.jsx";

const FeedPosts = () => {
  return (
    <Container maxW={"container.sm"} py={10} px={2}>
      {[1, 2, 3, 4, 5].map((post) => (
        <FeedPost key={post} />
      ))}
    </Container>
  );
};

export default FeedPosts;
