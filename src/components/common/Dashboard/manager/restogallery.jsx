import Image from "next/image";
import React from "react";

const RestoGallery = () => {
  return (
    <div className="flex flex-col gap-4 border border-slate-300 border-dashed rounded-xl mt-4 p-4 w-full">
      <h2 className="font-bold">Gallery</h2>
      <div className="w-full grid grid-cols-3 xl:grid-cols-4 gap-2 duration-100">
        <Image
          src="/image/1.png"
          alt="1image"
          width={100}
          height={100}
          className="w-full"
        />
        <Image
          src="/image/1.png"
          alt="1image"
          width={100}
          height={100}
          className="w-full"
        />
        <Image
          src="/image/1.png"
          alt="1image"
          width={100}
          height={100}
          className="w-full"
        />
        <Image
          src="/image/1.png"
          alt="1image"
          width={100}
          height={100}
          className="w-full"
        />
        <Image
          src="/image/1.png"
          alt="1image"
          width={100}
          height={100}
          className="w-full"
        />
        <Image
          src="/image/1.png"
          alt="1image"
          width={100}
          height={100}
          className="w-full"
        />
        <Image
          src="/image/1.png"
          alt="1image"
          width={100}
          height={100}
          className="w-full"
        />
        <Image
          src="/image/1.png"
          alt="1image"
          width={100}
          height={100}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default RestoGallery;
