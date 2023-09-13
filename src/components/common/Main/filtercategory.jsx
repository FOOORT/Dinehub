import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiArrowRight } from "react-icons/fi";

const FilterCategory = () => {
  return (
    <nav className="flex gap-4 items-center justify-center">
      <Link href="/menu">
        <div className="flex flex-col items-center justify-center active:rounded-full px-4 rounded-md">
          <Image
            src="/image/Rectangle23.png"
            alt="image"
            width={50}
            height={50}
            className="rounded-full"
          />
          <span className="text-xs pt-1">Continental</span>
        </div>
      </Link>
      <Link href="/menu">
        <div className="flex flex-col items-center justify-center active:rounded-full px-4 rounded-md">
          <Image
            src="/image/Rectangle24.png"
            alt="image"
            width={50}
            height={50}
            className="rounded-full"
          />
          <span className="text-xs pt-1">Beverage</span>
        </div>
      </Link>
      <Link href="/menu">
        <div className="flex flex-col items-center justify-center active:rounded-full px-4 rounded-md">
          <Image
            src="/image/Rectangle25.png"
            alt="image"
            width={50}
            height={50}
            className="rounded-full"
          />
          <span className="text-xs pt-1">Food</span>
        </div>
      </Link>
      <Link href="/menu">
        <div className="flex flex-col items-center justify-center active:rounded-full px-4 rounded-md">
          <Image
            src="/image/Rectangle26.png"
            alt="image"
            width={50}
            height={50}
            className="rounded-full"
          />
          <span className="text-xs pt-1">Snacks</span>
        </div>
      </Link>
      <Link href="/menu">
        <div className="flex flex-col items-center justify-center active:rounded-full px-4 rounded-md">
          <Image
            src="/image/Rectangle27.png"
            alt="image"
            width={50}
            height={50}
            className="rounded-full"
          />
          <span className="text-xs pt-1">Soda</span>
        </div>
      </Link>
      <Link href="/menu">
        <div className="flex flex-col items-center justify-center active:rounded-full px-4 rounded-md">
          <Image
            src="/image/Rectangle28.png"
            alt="image"
            width={50}
            height={50}
            className="rounded-full"
          />
          <span className="text-xs pt-1">Fruits</span>
        </div>
      </Link>
      <div className="bg-white w-16 h-16 flex justify-center items-center rounded-full border group">
        <FiArrowRight className="group-hover:ml-4 duration-300" />
      </div>
    </nav>
  );
};

export default FilterCategory;