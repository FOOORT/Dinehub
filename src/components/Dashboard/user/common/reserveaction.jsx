import React from 'react'
import { FaPlusSquare } from 'react-icons/fa'

const ReserveAction = () => {
  return (
    <div className="flex flex-col gap-2 items-end">
      <h2 className="text-xl font-bold text-black">
        1 <span className='text-sm text-slate-400'> Plate of </span> 1,300rwf
      </h2>
      <button className="bg-black text-white px-4 py-3 rounded-md flex items-center gap-3 duration-100 active:scale-110">
        Order now
        <FaPlusSquare />
      </button>
    </div>
  );
}

export default ReserveAction