import { LuGalleryHorizontal } from "react-icons/lu";
import { AiOutlineCheck, AiOutlineDelete } from "react-icons/ai";
import { TbProgressCheck } from "react-icons/tb";

const OrderStats = [
  {
    title: 15,
    details: "All",
    icon: <LuGalleryHorizontal className="text-base text-blue-600" />,
  },
  {
    title: 5,
    details: "Pending",
    icon: <AiOutlineCheck className="text-base text-blue-600" />,
  },
  {
    title: 7,
    details: "Approved",
    icon: <TbProgressCheck className="text-base text-blue-600" />,
  },
  {
    title: 3,
    details: "Declined",
    icon: <AiOutlineDelete className="text-base text-blue-600" />,
  },
];

export default OrderStats;

// className = "text-base text-blue-600";
