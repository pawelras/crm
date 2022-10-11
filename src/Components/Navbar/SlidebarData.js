import React from "react";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as MdIcons from "react-icons/md";

export const SidebarData = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <RiIcons.RiDashboardLine />,
    cName: "nav-text"
  },
  {
    title: "Leads",
    path: "/leads",
    icon: <FaIcons.FaStar />,
    cName: "nav-text"
  },
  {
    title: "Products",
    path: "/products",
    icon: <MdIcons.MdTaskAlt />,
    cName: "nav-text"
  },
  {
    title: "Team",
    path: "/team",
    icon: <MdIcons.MdEmojiPeople />,
    cName: "nav-text"
  },
  {
    title: "Messages",
    path: "/messages",
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: "nav-text"
  },
  {
    title: "Support",
    path: "/support",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text"
  }
];
