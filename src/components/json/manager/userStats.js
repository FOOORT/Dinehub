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
    title: 706900,
    details: "Active balance",
    icon: <FaUserShield className="text-base text-blue-600" />,
  },
  {
    title: 98800,
    details: "Daily balance",
    icon: <HiOutlineUserCircle className="text-base text-blue-600" />,
  },
  {
    title: 15,
    details: "New Clients Today",
    icon: <PiUserCirclePlus className="text-base text-blue-600" />,
  },
];

export default UserStats;
