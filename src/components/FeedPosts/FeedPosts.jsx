import { Container } from "@chakra-ui/react";
import FeedPost from "./FeedPost.jsx";
import { feedPosts } from "../../assets/data.js";

const FeedPosts = () => {
  return (
    <Container maxW={"container.sm"} py={10} px={2}>
      {feedPosts?.length > 0 &&
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
