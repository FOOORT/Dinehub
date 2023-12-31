import { AiOutlineShop, AiOutlineStock } from "react-icons/ai";
import { BiHistory } from "react-icons/bi";
import { FiMessageSquare, FiSettings, FiUsers } from "react-icons/fi";
import { GoBell } from "react-icons/go";
import { MdOutlineMenuBook, MdSpaceDashboard } from "react-icons/md";
import { TbCategory } from "react-icons/tb";

const Navs = [
  {
    name: "Dashboard",
    icon: <MdSpaceDashboard />,
    path: "/dashboard/admin/",
    category: "menu",
  },
  {
    name: "Restaurant",
    icon: <AiOutlineShop />,
    path: "/dashboard/admin/restaurant",
    category: "menu",
  },
  {
    name: "Users",
    icon: <FiUsers />,
    path: "/dashboard/admin/users",
    category: "menu",
  },
  {
    name: "Category",
    icon: <TbCategory />,
    path: "/dashboard/admin/category",
    category: "menu",
  },
  {
    name: "Menus",
    icon: <MdOutlineMenuBook />,
    path: "/dashboard/admin/menus",
    category: "menu",
  },
  {
    name: "History",
    icon: <BiHistory />,
    path: "/dashboard/admin/history",
    category: "report",
  },
  {
    name: "Stock",
    icon: <AiOutlineStock />,
    path: "/dashboard/admin/stocks",
    category: "stock",
  },

  {
    name: "Messages",
    icon: <FiMessageSquare />,
    path: "/dashboard/admin/message",
    category: "message",
  },
  {
    name: "Notification",
    icon: <GoBell />,
    path: "/dashboard/admin/notifications",
    category: "message",
  },
  {
    name: "Settings",
    icon: <FiSettings />,
    path: "/dashboard/admin/settings",
    category: "message",
  },
];

export default Navs;
