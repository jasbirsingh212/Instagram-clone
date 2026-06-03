import { Box, Link, Flex, Tooltip, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { InstagramLogo, InstagramMobileLogo } from "../../assets/constants";
import { sidebarItems } from "../../assets/data";
import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";

const Sidebar = () => {
  const { handleLogout, isLoggingOut } = useLogout();

  return (
    <Box
      height={"100vh"}
      borderRight={"1px solid "}
      borderColor={"whiteAlpha.300"}
      py={8}
      position={"sticky"}
      top={0}
      left={0}
      px={{ base: 2, md: 4 }}
    >
      <Flex direction={"column"} gap={10} w="full" height={"full"}>
        <Link
          to={"/"}
          as={RouterLink}
          pl={2}
          display={{ base: "none", md: "block" }}
          cursor={"pointer"}
        >
          <InstagramLogo />
        </Link>

        <Link
          to={"/"}
          as={RouterLink}
          pl={2}
          display={{ base: "block", md: "none" }}
          cursor={"pointer"}
          borderRadius={6}
          _hover={{ bg: "whiteAlpha.200" }}
          w={10}
        >
          <InstagramMobileLogo />
        </Link>

        <Flex direction={"column"} gap={5} cursor={"pointer"}>
          {sidebarItems?.length > 0 &&
            sidebarItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <Tooltip
                  key={index}
                  hasArrow
                  label={item.text}
                  placement="right"
                  ml={1}
                  openDelay={300}
                  display={{ base: "block", md: "none" }}
                >
                  <Link
                    display={"flex"}
                    to={item.link || null}
                    as={RouterLink}
                    alignItems={"center"}
                    gap={4}
                    p={2}
                    cursor={"pointer"}
                    borderRadius={6}
                    _hover={{ bg: "whiteAlpha.400" }}
                    w={{ base: "10", md: "full" }}
                    justifyContent={{ base: "center", md: "flex-start" }}
                  >
                    {item.props ? <Icon {...item.props} /> : <Icon size={25} />}
                    <Box display={{ base: "none", md: "block" }}>
                      {item.text}
                    </Box>
                  </Link>
                </Tooltip>
              );
            })}
        </Flex>

        <Tooltip
          hasArrow
          label={"Logout"}
          placement="right"
          ml={1}
          openDelay={500}
          display={{ base: "block", md: "none" }}
        >
          <Flex
            onClick={handleLogout}
            alignItems={"center"}
            gap={4}
            p={2}
            cursor={"pointer"}
            borderRadius={6}
            _hover={{ bg: "whiteAlpha.400" }}
            w={{ base: "10", md: "full" }}
            mt={"auto"}
            justifyContent={{ base: "center", md: "flex-start" }}
          >
            <BiLogOut size={25} />

            <Button
              display={{ base: "none", md: "block" }}
              variant={"ghost"}
              _hover={{ bg: "transparent" }}
              isLoading={isLoggingOut}
            >
              Logout
            </Button>
          </Flex>
        </Tooltip>
      </Flex>
    </Box>
  );
};

export default Sidebar;
