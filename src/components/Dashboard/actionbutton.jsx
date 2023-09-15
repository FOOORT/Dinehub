import React from 'react'
import { FaPlusSquare } from 'react-icons/fa';

const ActionButton = () => {
  return (
    <button className="bg-black text-white px-4 py-3 rounded-md flex items-center gap-3 duration-100 active:scale-110">
      Order now
      <FaPlusSquare />
    </button>
  );
}

export default ActionButton