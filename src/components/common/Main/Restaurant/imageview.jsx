import Image from "next/image";
import React from "react";

const ImageView = () => {
  return (
    <div className="h-[70vh] md:h-auto w-full bg-white p-1 rounded-xl flex flex-col md:flex-row items-center justify-center gap-1">
        <Image
          src="/image/11.png"
          alt="Image 1"
          width={100}
          height={100}
          className="w-full md:w-1/2 h-full rounded-t-xl md:rounded-l-xl md:rounded-none"
        />
      <div className="flex w-full md:w-1/2 gap-1 md:gap-2 lg:gap-3 xl:gap-4">
        <div className="w-full gap-1 grid grid-cols-4 md:grid-cols-1 lg:grid-cols-2">
          <Image
            src="/image/13.png"
            alt="Image 1"
            width={100}
            height={100}
            className="w-full block md:hidden lg:block rounded-bl-xl md:rounded-none"
          />
          <Image
            src="/image/14.png"
            alt="Image 1"
            width={100}
            height={100}
            className="w-full block md:hidden lg:block rounded-none md:rounded-tr-xl md:rounded-none lg:rounded-tr-xl"
          />
          <Image
            src="/image/13.png"
            alt="Image 1"
            width={100}
            height={100}
            className="w-full block md:hidden lg:block"
          />
          <Image
            src="/image/14.png"
            alt="Image 1"
            width={100}
            height={100}
            className="w-full rounded-none rounded-br-xl md:rounded-r-xl lg:rounded-br-xl lg:rounded-none"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageView;
