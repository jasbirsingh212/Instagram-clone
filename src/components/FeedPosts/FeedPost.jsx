import PostHeader from "./PostHeader.jsx";
import PostFooter from "./PostFooter.jsx";
import { Box, Image } from "@chakra-ui/react";

const FeedPost = () => {
  return (
    <div>
      <PostHeader />
      <Box>
        <Image src="/img1.png" alt="UserPost Image" />
      </Box>
      <PostFooter />
    </div>
  );
};

export default FeedPost;
