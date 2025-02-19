import { img, title } from "framer-motion/client";
import Card from "./Card";

const Tweaking = () => {
  const data = [
    {
      img: "/bobcat.svg",
      title: "Bobcat Designers",
      description:
        "Experience the Ultimate in Web and Graphic Design Excellence with Bobcat Designers – Where Creativity Meets Innovation to Transform Your Vision into Reality!",
    },
    {
      img: "/seoadut.svg",
      title: "The SEO Auditors",
      description:
        " Unlock SEO Excellence with The SEO Auditors – Your Premier Destination for Comprehensive SEO Audits and In-Depth Analysis!",
    },
    {
      img: "/webdesign.svg",
      title: "Web Designs",
      description:
        "Elevate Your Online Presence with My Expertise in Crafting and Authoring Engaging Content on My Specialized Niche Blogging Websites",
    },
  ];
  return (
    <>
      <div className="">
        <div className="flex gap-1 justify-center items-center mt-10 mb-10">
          <div className="border-b-2 border-gray-400/20 w-1/2"></div>
          <div>
            <h1 className="text-center text-xs md:text-xs lg:text-xs px-4">
              WHAT I'VE BEEN TWEAKING
            </h1>
          </div>
          <div className="border-b-[1px] border-gray-400/20 my-5 w-1/2"></div>
        </div>{" "}
        <div className="px-5 md:px-5">
          <h1 className="text-5xl md:text-7xl tracking-tighter leading-none font-bold md:w-full lg:w-2/3 ">
            Take a look at what i've been
            <span className="bg-gradient-to-l from-[#E0AE24] to-[#D69518] text-transparent bg-clip-text  ">
              {" "}
              tweaking
            </span>
          </h1>
          <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 md:mt-20 gap-6">
            {data.map((items, index) => {
              return (
                <Card
                  key={index}
                  img={items.img}
                  title={items.title}
                  description={items.description}
                />
              );
            })}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-10 mt-5 md:mt-20">
            <div className="px-10 py-3 bg-[#181923] rounded-2xl flex justify-center items-center flex-col ">
              <h1 className="text-8xl font-bold ">20+</h1>
              <p className="text-2xl bg">Projects Compeleted</p>
            </div>
            <div className="px-10 py-3 bg-[#181923] rounded-2xl flex justify-center items-center flex-col ">
              <h1 className="text-8xl font-bold ">10+</h1>
              <p className="text-2xl bg">Happy Clients</p>
            </div>
            <div className="bg-linear-160 from-rose-700 via-pink-500 to-rose-700 px-10 py-3 rounded-2xl flex justify-center items-center flex-col text-xl ">
              <h1>Want to start a Project?</h1>
              <h1>Get Cost Estimation for Free</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tweaking;
