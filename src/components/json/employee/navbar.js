import { AiOutlineStock } from "react-icons/ai";
import { BiHistory } from "react-icons/bi";
import { FiMessageSquare, FiSettings, FiUsers } from "react-icons/fi";
import { GoBell } from "react-icons/go";
import { MdOutlineMenuBook, MdSpaceDashboard } from "react-icons/md";
import { SiCoffeescript } from "react-icons/si";

const Navs = [
  {
    name: "Dashboard",
    icon: <MdSpaceDashboard />,
    path: "/dashboard/employee/",
    category: "menu",
  },
  {
    name: "Orders",
    icon: <SiCoffeescript />,
    path: "/dashboard/employee/orders",
    category: "menu",
  },
  {
    name: "Client",
    icon: <FiUsers />,
    path: "/dashboard/employee/clients",
    category: "menu",
  },
  {
    name: "Menus",
    icon: <MdOutlineMenuBook />,
    path: "/dashboard/employee/menus",
    category: "menu",
  },
  {
    name: "History",
    icon: <BiHistory />,
    path: "/dashboard/employee/history",
    category: "report",
  },
  {
    name: "Stock",
    icon: <AiOutlineStock />,
    path: "/dashboard/employee/stocks",
    category: "stock",
  },

  {
    name: "Messages",
    icon: <FiMessageSquare />,
    path: "/dashboard/employee/message",
    category: "message",
  },
  {
    name: "Notification",
    icon: <GoBell />,
    path: "/dashboard/employee/notifications",
    category: "message",
  },
  {
    name: "Settings",
    icon: <FiSettings />,
    path: "/dashboard/employee/settings",
    category: "message",
  },
];

export default Navs;
