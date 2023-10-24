import { LuGalleryHorizontal } from "react-icons/lu";
import { AiOutlineCheck, AiOutlineDelete } from "react-icons/ai";
import { TbProgressCheck } from "react-icons/tb";

const Stats = [
  {
    title: 15,
    details: "All restaurant",
    icon: <LuGalleryHorizontal className="text-base text-blue-600" />,
  },
  {
    title: 6,
    details: "Approved",
    icon: <AiOutlineCheck className="text-base text-blue-600" />,
  },
  {
    title: 4,
    details: "Pending",
    icon: <TbProgressCheck className="text-base text-blue-600" />,
  },
  {
    title: 1,
    details: "Rejected",
    icon: <AiOutlineDelete className="text-base text-blue-600" />,
  },
];

export default Stats;
