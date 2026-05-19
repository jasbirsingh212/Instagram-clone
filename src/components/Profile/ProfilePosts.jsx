import { Box, Grid, Skeleton, VStack } from "@chakra-ui/react";
import { Fragment, useEffect, useState } from "react";
import { profilePosts } from "../../assets/data";
import ProfilePost from "./ProfilePost";

const ProfilePosts = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Grid
      templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
      gap={1}
      columnGap={1}
    >
      {isLoading &&
        [1, 2, 3, 4, 5, 6].map((item) => (
          <VStack key={item} alignItems={"flex-start"} gap={4}>
            <Skeleton w={"full"}>
              <Box h={"300px"} bg={"gray.200"}>
                Contents Wrapped
              </Box>
            </Skeleton>
          </VStack>
        ))}

      {!isLoading &&
        profilePosts?.length > 0 &&
        profilePosts.map((post, idx) => (
          <Fragment key={idx}>
            <ProfilePost img={post?.img} />
          </Fragment>
        ))}
    </Grid>
  );
};

export default ProfilePosts;
