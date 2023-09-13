import Image from "next/image";
import React from "react";

const ImageView = () => {
  return (
    <div className="w-full  h-[20vh] sm:h-[30vh] md:h-[45vh] lg:h-[55vh] xl:h-[60vh] bg-white p-2 rounded-xl flex gap-1 md:gap-2 lg:gap-3 xl:gap-4">
      <div className="w-1/2 overflow-hidden">
        <Image
          src="/image/11.png"
          alt="Image 1"
          width={100}
          height={100}
          className="w-full h-full rounded-l-xl"
        />
      </div>
      <div className="flex w-1/2 gap-1 md:gap-2 lg:gap-3 xl:gap-4">
        <div className="flex flex-col w-1/2 gap-1 md:gap-2 lg:gap-3 xl:gap-4">
          <Image
            src="/image/13.png"
            alt="Image 1"
            width={100}
            height={100}
            className="w-full h-full"
          />
          <Image
            src="/image/14.png"
            alt="Image 1"
            width={100}
            height={100}
            className="w-full h-full"
          />
        </div>
        <div className="flex flex-col w-1/2 gap-1 md:gap-2 lg:gap-3 xl:gap-4">
          <Image
            src="/image/13.png"
            alt="Image 1"
            width={100}
            height={100}
            className="w-full h-full rounded-tr-xl"
          />
          <Image
            src="/image/14.png"
            alt="Image 1"
            width={100}
            height={100}
            className="w-full h-full rounded-br-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageView;
