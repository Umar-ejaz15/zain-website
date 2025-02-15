import { div } from "framer-motion/client";
import Service from "./Service";

const Whyme = () => {
  const data = [
    {
      img: "/public/transperency.webp",
      txt: "  Transparency About Project",
    },
    {
      img: "/public/growth.webp",
      txt: "Growth-Oriented Approach",
    },
    {
      img: "/public/exterm.webp",
      txt: "Extremely Fast Execution",
    },
    {
      img: "/public/solutions.webp",
      txt: "Customized Solutions",
    },
  ];
  return (
    <div className="px-4 md:px-20 w-full h-auto  flex justify-center items-center py-10 flex-col gap-4 md:gap-6 lg:gap-8 ">
      <div className="bg-gradient-to-b rounded-4xl w-full from-[#34046E] to-[#06154A] flex flex-col lg:flex-row gap-5 p-2 md:p-8 lg:p-20">
        <div className="allserervies w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
          {data.map((item, index) => {
            return <Service img={item.img} txt={item.txt} key={index} />;
          })}
        </div>
        <div className="mt-8 lg:mt-0 lg:w-1/2">
          <h1 className="text-3xl md:text-5xl lg:text-8xl font-bold">
            <span className="bg-gradient-to-r from-[#FFD700] to-[#FF8C00] text-transparent bg-clip-text">
              Working with Zain is as 
            </span> easy as writing these facts
          </h1>
        </div>
      </div>{" "}
    </div>
  );
};

export default Whyme;
