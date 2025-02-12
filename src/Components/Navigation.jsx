import { HiMenu } from "react-icons/hi";
import { AiOutlineHome, AiFillFolder, AiOutlineFile } from "react-icons/ai";
import { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex flex-row md:flex-row justify-between items-center py-3 px-4 relative">
      <div className="left flex flex-col justify-center items-center mb-4 md:mb-0">
        <div>
          <h1 className="text-xl md:text-2xl font-medium uppercase text-center">Zain ul Abiddin</h1>
        </div>
        <div className="text-[10px] md:text-[8px] flex flex-wrap gap-2 justify-center content-center font-thin">
          <h2 className="text-yellow-500">Search Engine Optimization</h2>
          <h2 className="text-blue-500">Website Designer</h2>
          <h2 className="text-red-500">Website Developer</h2>
        </div>
      </div>
      <div className="md:hidden">
        <HiMenu
          className="w-6 h-6 cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      </div>
      <div className={`right ${isMenuOpen ? 'block' : 'hidden'} md:block absolute md:relative top-full left-0 w-full md:w-auto shadow-lg md:shadow-none z-50`}>
        <ul className="flex flex-col md:flex-row gap-4 md:gap-6 text-base md:text-lg p-4 md:p-0">
          <li className="cursor-pointer hover:text-gray-600 flex items-center gap-2">
            <AiOutlineHome className="w-5 h-5" />
            <span>Home</span>
          </li>
          <li className="cursor-pointer hover:text-gray-600 flex items-center gap-2">
            <AiFillFolder className="w-5 h-5" />
            <span>Portfolio</span>
          </li>
          <li className="cursor-pointer hover:text-gray-600 flex items-center gap-2">
            <AiOutlineFile className="w-5 h-5" />
            <span>My Resume</span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;