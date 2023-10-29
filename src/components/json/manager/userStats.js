import { PiUsersFourLight, PiUserCirclePlus } from "react-icons/pi";
import { FaUserShield } from "react-icons/fa";
import { HiOutlineUserCircle } from "react-icons/hi";

const UserStats = [
  {
    title: 83,
    details: "All clients",
    icon: <PiUsersFourLight className="text-base text-blue-600" />,
  },
  {
    title: 3,
    details: "Employees",
    icon: <FaUserShield className="text-base text-blue-600" />,
  },
  {
    title: 43,
    details: "Clients",
    icon: <HiOutlineUserCircle className="text-base text-blue-600" />,
  },
  {
    title: 61,
    details: "Subscribers",
    icon: <PiUserCirclePlus className="text-base text-blue-600" />,
  },
];

export default UserStats;
