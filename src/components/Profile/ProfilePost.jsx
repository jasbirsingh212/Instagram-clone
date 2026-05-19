import { GridItem } from "@chakra-ui/react";

const ProfilePost = ({ img }) => {
  return (
    <GridItem>
      <img src={img} alt="Profile" />
    </GridItem>
  );
};

export default ProfilePost;
