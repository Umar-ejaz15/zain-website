const Final = () => {
  return (
    <div className="flex flex-col md:flex-row items-center mt-8 md:mt-20 px-4 sm:px-6 md:px-8 lg:px-16 py-8 md:py-12 mx-4 sm:mx-6 md:mx-8 lg:mx-12 rounded-[2rem] bg-gradient-to-r from-[#35046E] to-[#061549]">
      <div className="md:flex-1 text-center md:text-left md:pr-8 lg:pr-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
          Let's find the missing piece
        </h1>
        <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
          <p className="text-lg sm:text-xl md:text-2xl bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent font-medium">
            Now is the right time to pivot your digital strategy.
          </p>
          <p className="text-lg sm:text-xl md:text-2xl bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent font-medium">
            Let's start discussing within minutes!
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
          <button className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl transition-all duration-300 text-base sm:text-lg font-semibold transform hover:scale-105 shadow-lg">
            <a href="#" className="whitespace-nowrap">Free Consultation</a>
          </button>
          <button className="w-full sm:w-auto bg-transparent border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl transition-all duration-300 text-base sm:text-lg font-semibold transform hover:scale-105 shadow-lg">
            <a href="#" className="whitespace-nowrap">Agency Website</a>
          </button>
        </div>
      </div>
      <div className="mt-8 md:mt-0 md:flex-1 flex justify-center">
        <img
          src="/missing pieace.webp"
          alt="Missing Piece Illustration"
          className="w-full max-w-[280px] sm:max-w-sm md:max-w-none md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto transition-transform duration-300 hover:scale-105"
        />
      </div>
    </div>
  );
};

export default Final;