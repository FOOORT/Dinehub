import { AiOutlineShop, AiOutlineStock } from "react-icons/ai";
import { BiHistory } from "react-icons/bi";
import { FiMessageSquare, FiSettings, FiUsers } from "react-icons/fi";
import { GoBell } from "react-icons/go";
import { MdOutlineMenuBook, MdSpaceDashboard } from "react-icons/md";

const Navs = [
  {
    name: "Dashboard",
    icon: <MdSpaceDashboard />,
    path: "/dashboard/manager/",
    category: "menu",
  },
  {
    name: "Client",
    icon: <FiUsers />,
    path: "/dashboard/manager/clients",
    category: "menu",
  },
  {
    name: "Employees",
    icon: <FiUsers />,
    path: "/dashboard/manager/employees",
    category: "menu",
  },
  {
    name: "Loan",
    icon: <MdOutlineMenuBook />,
    path: "/dashboard/manager/loan",
    category: "menu",
  },
  {
    name: "Menus",
    icon: <MdOutlineMenuBook />,
    path: "/dashboard/manager/menus",
    category: "menu",
  },
  {
    name: "History",
    icon: <BiHistory />,
    path: "/dashboard/manager/history",
    category: "report",
  },
  {
    name: "Stock",
    icon: <AiOutlineStock />,
    path: "/dashboard/manager/stocks",
    category: "stock",
  },

  {
    name: "Messages",
    icon: <FiMessageSquare />,
    path: "/dashboard/manager/message",
    category: "message",
  },
  {
    name: "Notification",
    icon: <GoBell />,
    path: "/dashboard/manager/notifications",
    category: "message",
  },
  {
    name: "Settings",
    icon: <FiSettings />,
    path: "/dashboard/manager/settings",
    category: "message",
  },
];

export default Navs;
