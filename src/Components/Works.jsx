const Works = () => {
  return (
    <div
      style={{ background: "url(/bg.jpg)", color: "var(--dark3)" }}
      className="w-full h-auto md:h-auto py-10"
    >
      <div className="  flex gap-1 justify-center items-center">
        <div className="border-b-2 border-gray-400/20 w-1/4 md:w-1/3 lg:w-1/2"></div>
        <div>
          <h1 className="text-center text-xs whitespace-nowrap">
            WORK WITH Zain & HIS TEAM
          </h1>
        </div>
        <div className="border-b-[1px] border-gray-400/20 my-5 w-1/4 md:w-1/3 lg:w-1/2"></div>
      </div>
      <div className="flex justify-center items-center flex-col gap-4 md:gap-6 lg:gap-8 px-4">
        <img className="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64" src="/hand.png" alt="hand icon" />
        <h1 className="text-4xl md:text-6xl lg:text-8xl text-center w-full md:w-3/4 lg:w-1/2 font-bold leading-tight md:leading-none tracking-tighter">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">Founder</span>{" "}
          meet your{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-orange-500">partner</span>
        </h1>
        <p className="text-xl md:text-2xl lg:text-4xl w-full md:w-3/4 lg:w-1/2 text-center">
          Your expectations will be blown away. When you were looking for a
          designer and/or marketer and you found a partner.
        </p>
      </div>
    </div>
  );
};

export default Works;