import React from "react";

const About = () => {
  return (
    <>
      <div className="flex gap-1 justify-center items-center">
        <div className="border-b-2 border-gray-400/20 w-1/2"></div>
        <div>
          <h1 className="text-center text-xs md:text-xs lg:text-xs px-4">
            A LITTLE ABOUT ME
          </h1>
        </div>
        <div className="border-b-[1px] border-gray-400/20 my-5 w-1/2"></div>
      </div>{" "}
      <div className="w-full min-h-screen flex flex-col lg:flex-row justify-center  gap-6 md:gap-8 lg:gap-10 px-4 md:px-8 lg:px-20 py-6">
        <div className="w-full lg:w-2/3 bg-[#191923] rounded-3xl lg:rounded-4xl p-6 md:p-8 lg:p-10">
          <div className="flex flex-col gap-3">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Who's behind{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4A90E2] via-[#6B5B95] to-[#9B59B6]">
                all this great work?
              </span>
            </h1>
            <div className="border-b-[1px] border-gray-400/20 my-5"></div>
            <p className="text-xl md:text-2xl lg:text-3xl">
              Usman "didn't want to wear a suit every day to build someone
              else's dream" and just wanted to create a business that would give
              him and his family true freedom of time and money. He now has his
              own dream business online and lives life on his terms. You can
              too!
            </p>
            <p className="text-xl md:text-2xl lg:text-3xl mt-4">
              Get results, grow your business, and enjoy the freedom of the good
              life you desire.
            </p>
            <button className="text-left w-fit mt-8 lg:mt-10 border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition-colors duration-300">
              Let's Work Together
            </button>
          </div>
        </div>
        <div className="w-full lg:w-1/3 px-4">
          <img
            className="w-full h-auto rounded-3xl lg:rounded-4xl object-cover"
            src="/profile.jpg"
            alt="Profile"
            loading="lazy"
          />
        </div>
      </div>
    </>
  );
};

export default About;
