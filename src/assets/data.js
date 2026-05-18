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

export const feedPosts = [
  {
    img: "/img1.png",
    username: "burakorkmezz",
    avatar: "/img1.png",
  },
  {
    img: "/img2.png",
    username: "josh",
    avatar: "/img2.png",
  },
  {
    img: "/img3.png",
    username: "janedoe",
    avatar: "/img3.png",
  },
  {
    img: "/img4.png",
    username: "johndoe",
    avatar: "/img4.png",
  },
];

export const suggestedUsers = [
  {
    name: "Dan Abrahamov",
    followers: 1392,
    avatar:
      "https://demos.pixinvent.com/vuexy-html-admin-template/assets/img/avatars/1.png",
  },
  {
    name: "Ryan Florence",
    followers: 567,
    avatar: "https://bit.ly/ryan-florence",
  },
  {
    name: "Christian Nwamba",
    followers: 759,
    avatar:
      "https://demos.pixinvent.com/vuexy-html-admin-template/assets/img/avatars/7.png",
  },
];
