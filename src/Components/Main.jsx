import Button from "./ui/Button";
import Frame from "./ui/Frame";
import Gradient from "./ui/Gradient";

const Main = () => {
  return (
    <div className="w-full h-screen relative flex flex-col justify-center items-center">
      <div className="w-36 h-36 object-center object-cover ">
        <img 
          className="w-full h-full rounded-full shadow-lg hover:scale-105 transition-transform duration-300" 
          src="../../profile.jpg" 
          alt="Profile" 
        />
      </div>

      <h3 className="text-2xl font-medium text-gray-700 mt-3 mb-2">Hi! I am Zain</h3>

      <div className="flex flex-col  text-center text-4xl md:text-8xl font-bold leading-none tracking-tighter ">
        <h1 style={{ fontFamily: "var(--font2)" }}>Website Designer</h1>
        <h1 style={{ fontFamily: "var(--font2)" }}>& SEO Specialist</h1>
      </div>

      <h3 className="text-2xl text-gray-700 mt-5">While working remotely</h3>
      
      <div className="relative z-10">
        <Button btntext="Currently Available" />
      </div>
      <Gradient/>
      <Frame/>
    </div>
  );
};

export default Main;