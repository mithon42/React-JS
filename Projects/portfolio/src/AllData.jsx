import { FaHome, FaUser, FaFolderOpen, FaEnvelopeOpen, FaGraduationCap, FaLaptopCode } from "react-icons/fa";
import {AiFillProject} from "react-icons/ai"

export const links = [
  {
    id: 1,
    name: "Home",
    icon: <FaHome className="nav-icon" />,
    path: "/",
  },

  {
    id: 2,
    name: "About",
    icon: <FaUser className="nav-icon" />,
    path: "/about",
  },

  {
    id: 3,
    name: "Educations",
    icon: <FaGraduationCap className="nav-icon" />,
    path: "/educations",
  },
  {
    id: 4,
    name: "Skills",
    icon: <FaLaptopCode className="nav-icon" />,
    path: "/skills",
  },
  {
    id: 5,
    name: "Projects",
    icon: <AiFillProject className="nav-icon" />,
    path: "/projects",
  },
  {
    id: 6,
    name: "Contact",
    icon: <FaEnvelopeOpen className="nav-icon" />,
    path: "/contact",
  },
];
