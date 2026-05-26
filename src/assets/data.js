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
    img: "https://res.cloudinary.com/dodz78rrl/image/upload/v1779770094/img1_nuzygv.jpg",
    username: "burakorkmezz",
    avatar:
      "https://res.cloudinary.com/dodz78rrl/image/upload/v1779770094/img1_nuzygv.jpg",
  },
  {
    img: "https://res.cloudinary.com/dodz78rrl/image/upload/v1779770094/img2_gpogjb.jpg",
    username: "josh",
    avatar:
      "https://res.cloudinary.com/dodz78rrl/image/upload/v1779770094/img2_gpogjb.jpg",
  },
  {
    img: "https://res.cloudinary.com/dodz78rrl/image/upload/v1779770094/img3_pqixab.jpg",
    username: "janedoe",
    avatar:
      "https://res.cloudinary.com/dodz78rrl/image/upload/v1779770094/img3_pqixab.jpg",
  },
  {
    img: "https://res.cloudinary.com/dodz78rrl/image/upload/v1779770094/img4_p36xm8.jpg",
    username: "johndoe",
    avatar:
      "https://res.cloudinary.com/dodz78rrl/image/upload/v1779770094/img4_p36xm8.jpg",
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

export const profilePosts = [
  {
    img: "https://res.cloudinary.com/dodz78rrl/image/upload/v1779770094/img1_nuzygv.jpg",
    username: "burakorkmezz",
    avatar:
      "https://res.cloudinary.com/dodz78rrl/image/upload/v1779770094/img1_nuzygv.jpg",
  },
  {
    img: "https://res.cloudinary.com/dodz78rrl/image/upload/v1779770094/img2_gpogjb.jpg",
    username: "burakorkmezz",
    avatar:
      "https://res.cloudinary.com/dodz78rrl/image/upload/v1779770094/img2_gpogjb.jpg",
  },
  {
    img: "https://res.cloudinary.com/dodz78rrl/image/upload/v1779770094/img3_pqixab.jpg",
    username: "burakorkmezz",
    avatar:
      "https://res.cloudinary.com/dodz78rrl/image/upload/v1779770094/img3_pqixab.jpg",
  },
  {
    img: "https://res.cloudinary.com/dodz78rrl/image/upload/v1779770094/img4_p36xm8.jpg",
    username: "burakorkmezz",
    avatar:
      "https://res.cloudinary.com/dodz78rrl/image/upload/v1779770094/img4_p36xm8.jpg",
  },
];
