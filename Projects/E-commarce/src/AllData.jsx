import {
  FaHome,
  FaUser,
  FaEnvelopeOpen,
  FaFilter,
  FaShoppingCart,
  FaCcMastercard,
} from "react-icons/fa";

import { bannerOne, bannerTow, bannerThree, bannerFour } from "./assets";

export const links = [
  {
    id: 1,
    name: "Home",
    icon: <FaHome className="nav-icon" />,
    path: "/",
  },
  {
    id: 2,
    name: "Catagory",
    icon: <FaFilter className="nav-icon" />,
    path: "/catagory",
  },
  {
    id: 3,
    name: "Products",
    icon: <FaCcMastercard className="nav-icon" />,
    path: "/products",
  },
  {
    id: 4,
    name: "Contact",
    icon: <FaEnvelopeOpen className="nav-icon" />,
    path: "/contact",
  },
  {
    id: 5,
    name: "Card",
    icon: <FaShoppingCart className="nav-icon" />,
    path: "/card",
  },
  {
    id: 6,
    name: "Profile",
    icon: <FaUser className="nav-icon" />,
    path: "/profile",
  },
];

// Products data
export const products = [
  {
    id: 1,
    name: "car",
    description: "Lorem ipsum dolor sit amet",
    price: "115",
    image: bannerOne,
  },
  {
    id: 2,
    name: "cow",
    description: "Lorem ipsum dolor sit amet",
    price: "110",
    image: bannerTow,
  },
  {
    id: 3,
    name: "cat",
    description: "Lorem ipsum dolor sit amet",
    price: "75",
    image: bannerThree,
  },
  {
    id: 4,
    name: "man",
    description: "Lorem ipsum dolor sit amet",
    price: "25",
    image: bannerFour,
  },
  {
    id: 5,
    name: "car",
    description: "Lorem ipsum dolor sit amet",
    price: "115",
    image: bannerOne,
  },
  {
    id: 6,
    name: "cow",
    description: "Lorem ipsum dolor sit amet",
    price: "110",
    image: bannerTow,
  },
  {
    id: 7,
    name: "cat",
    description: "Lorem ipsum dolor sit amet",
    price: "75",
    image: bannerThree,
  },
  {
    id: 8,
    name: "Programmer",
    description: "Web Designer, Developer, SEO",
    price: "25",
    image: bannerFour,
  },
  {
    id: 9,
    name: "car",
    description: "Lorem ipsum dolor sit amet",
    price: "115",
    image: bannerOne,
  },
  {
    id: 10,
    name: "cow",
    description: "Lorem ipsum dolor sit amet",
    price: "110",
    image: bannerTow,
  },
  {
    id: 11,
    name: "cat",
    description: "Lorem ipsum dolor sit amet",
    price: "75",
    image: bannerThree,
  },
  {
    id: 12,
    name: "man",
    description: "Lorem ipsum dolor sit amet",
    price: "25",
    image: bannerFour,
  },
];

// Footer Menu
export const footerMenu = [
  {}
]