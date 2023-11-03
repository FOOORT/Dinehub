import { LuGalleryHorizontal } from "react-icons/lu";
import { AiOutlineCheck, AiOutlineDelete } from "react-icons/ai";
import { TbProgressCheck } from "react-icons/tb";

const Stats = [
  {
    title: 15,
    details: "Sales",
    icon: <LuGalleryHorizontal className="text-base text-blue-600" />,
  },
  {
    title: 5,
    details: "Subsribed",
    icon: <AiOutlineCheck className="text-base text-blue-600" />,
  },
  {
    title: 7,
    details: "Orders",
    icon: <TbProgressCheck className="text-base text-blue-600" />,
  },
  {
    title: 3,
    details: "New Users",
    icon: <AiOutlineDelete className="text-base text-blue-600" />,
  },
];

export default Stats;

// className = "text-base text-blue-600";
