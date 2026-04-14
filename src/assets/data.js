import { AiFillHome } from "react-icons/ai";
import { Avatar } from "@chakra-ui/react";
import { SearchLogo, NotificationsLogo, CreatePostLogo } from "./constants";

export const sidebarItems = [
  {
    icon: AiFillHome,
    props: {
      size: 25,
    },
    text: "Home",
    link: "/",
  },
  {
    icon: SearchLogo,
    text: "Search",
  },
  {
    icon: NotificationsLogo,
    text: "Notifications",
  },
  {
    icon: CreatePostLogo,
    text: "Create",
  },
  {
    icon: Avatar,
    props: {
      size: "sm",
      name: "Burak Orkmez",
      src: "/profilepic.png",
    },
    text: "Profile",
    link: "/asaprogrammer",
  },
];
