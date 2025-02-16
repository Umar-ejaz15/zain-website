import React from "react";
import { FaProjectDiagram, FaTools, FaRocket } from "react-icons/fa";

const SampleProcess = () => {
  const data = [
    {
      icon: <FaProjectDiagram className="text-4xl text-yellow-500" />,
      heading: "Project Request",
      para: "The first step in our collaboration is the project request. This gives me an idea of what you're looking for and helps me determine if I'm the right fit for your project. If so, we will schedule a video call to dive deeper.",
    },
    {
      icon: <FaTools className="text-4xl text-yellow-500" />,
      heading: "Building",
      para: "Ensuring transparent communication and regular updates is a priority for me. I'll keep you in the loop using convenient communication channels like Slack, Skype, WhatsApp, Email.",
    },
    {
      icon: <FaRocket className="text-4xl text-yellow-500" />,
      heading: "Launch",
      para: "Before launching, the finalized website will go through quality assurance to ensure every detail is just right. Depending on the project, I'll help to launch.",
    },
  ];
  return (
    <div className="bg-black w-full h-auto px-4 md:px-20 lg:px-40 py-20">
      <div className="flex gap-1 justify-center items-center mb-10">
        <div className="border-b-2 border-gray-200/20 w-1/4 md:w-1/3 lg:w-1/2"></div>
        <div>
          <h1 className="text-center text-sm md:text-base font-semibold text-yellow-500 whitespace-nowrap">
            MY SIMPLE PROCESS
          </h1>
        </div>
        <div className="border-b-[1px] border-gray-200/20 my-5 w-1/4 md:w-1/3 lg:w-1/2"></div>
      </div>

      <div className="space-y-20">
        <div className="upper w-full md:w-2/3 flex flex-col gap-10">
          <h1 className="text-4xl md:text-6xl font-bold text-[#C4CFDE]">
            I have a team of{" "}
            <span className="bg-gradient-to-b from-yellow-500 to-amber-300 text-transparent bg-clip-text">
              highly-skilled
            </span>{" "}
            Web & Graphic designers and SEO Specialists
          </h1>
          <p className="text-xl md:text-3xl text-gray-400">
            We offer all our clients 24/7 availability, transparent, fixed
            pricing and exceptional quality work.
          </p>
        </div>
        <div className="lower grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="relative">
            <img src="/man.png" alt="Team member" className="w-full h-auto object-cover rounded-lg" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg"></div>
          </div>
          <div className="space-y-10">
            {data.map((item, index) => (
              <div key={index} className="flex gap-6 group hover:bg-gray-900/50 p-6 rounded-lg transition-all duration-300">
                <div className="mt-1">{item.icon}</div>
                <div>
                  <h1 className="text-2xl font-bold text-yellow-500 mb-2 group-hover:translate-x-2 transition-transform duration-300">
                    {item.heading}
                  </h1>
                  <p className="text-gray-400 text-lg">{item.para}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SampleProcess;