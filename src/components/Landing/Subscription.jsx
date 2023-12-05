import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const Subscription = () => {
  return (
    <section
      className="w-full flex px-4 lg:px-12 gap-4 py-4 group"
      id="subscription"
    >
      <div className="flex bg-slate-50 p-12 rounded-md lg:rounded-r-full gap-12 ml-5 justify-center lg:justify-center">
        <div className="flex flex-col justify-start items-start gap-2">
          <h1 className="uppercase text-5xl font-semibold">Subscription</h1>
          <p>
            Choose your favorite restaurant and dishes, then select a plan that
            suits your desired duration. Our professional platform enables you
            to effortlessly customize your dining experience. With an array of
            options, you can indulge in delectable meals hassle-free. From
            short-term to long-term plans, we have got you covered. Enjoy the
            convenience and flexibility of our service, tailored to your
            preferences, ensuring a delightful and memorable culinary journey.
          </p>
          <button className="border border-black px-6 py-3 flex justify-center items-center gap-4 scale-95 hover:scale-100 mt-2 duration-300 rounded-md hover:bg-black hover:text-white">
            Explore restaurent
            <FaArrowRight className="animate-bounce" />
          </button>
        </div>
        <Image
          layout="responsive"
          src="/image/Plate.png"
          alt="Plain"
          width={320}
          height={300}
          className="w-56 h-56 duration-500 group-hover:scale-110 group-hover:saturate-200  hidden lg:block"
        />
      </div>
    </section>
  );
};

export default Subscription;
