import { LuGalleryHorizontal } from "react-icons/lu";
import { AiOutlineCheck, AiOutlineDelete } from "react-icons/ai";
import { TbProgressCheck } from "react-icons/tb";

const Stats = [
  {
    title: 15,
    details: "All restaurant",
    icon: <LuGalleryHorizontal />,
  },
  {
    title: 6,
    details: "Approved",
    icon: <AiOutlineCheck />,
  },
  {
    title: 4,
    details: "Pending",
    icon: <TbProgressCheck />,
  },
  {
    title: 1,
    details: "Rejected",
    icon: <AiOutlineDelete />,
  },
];

export default Stats;
