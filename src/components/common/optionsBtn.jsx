"use client"

import React, {useState} from 'react'
import { BiDotsHorizontal } from 'react-icons/bi'

const OptionsBtn = () => {

  const [options, setOptions] = useState(false);

  const handleMoreBtn = () => {
    setOptions((prev) => !prev);
  }


  return (
    <div className="flex flex-col justify-start items-end">
      <button className="active:bg-black active:text-white h-5 w-6 flex justify-center items-center rounded-md border relative z-40 " onClick={handleMoreBtn}>
        <BiDotsHorizontal />
      </button>
      {options && (
        <ul className="rounded-lg flex flex-col absolute gap-1 text-white text-xs font-semibold mt-7 z-50 active:z-50">
          <button className="px-4 py-2 rounded-lg bg-blue-600">Approve</button>
          <button className="px-4 py-2 rounded-lg bg-red-600">Reject</button>
        </ul>
      )}
    </div>
  );
}

export default OptionsBtn