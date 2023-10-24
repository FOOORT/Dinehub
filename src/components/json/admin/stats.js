import { LuGalleryHorizontal } from "react-icons/lu";
import { AiOutlineCheck, AiOutlineDelete } from "react-icons/ai";
import { TbProgressCheck } from "react-icons/tb";

const Stats = [
  {
    title: 15,
    details: "Total Visis",
    icon: <LuGalleryHorizontal />,
  },
  {
    title: 5,
    details: "Users",
    icon: <AiOutlineCheck />,
  },
  {
    title: 7,
    details: "Total orders",
    icon: <TbProgressCheck />,
  },
  {
    title: 3,
    details: "New Users",
    icon: <AiOutlineDelete />,
  },
];

export default Stats;

// className = "text-base text-blue-600";
