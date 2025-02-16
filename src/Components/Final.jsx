const Final = () => {
  return (
    <div className="flex flex-col md:flex-row items-center  mt-20 min-h-auto px-5 md:px-20 rounded-4xl bg-gradient-to-r from-[#35046E] to-[#061549] py-10 ml-10 mr-10">
      <div className="text-center px-4 md:px-0 md:w-1/2">
        <h1 className="text-4xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 text-transparent bg-clip-text">
          Let's find the missing piece
        </h1>
        <p className="text-xl md:text-2xl mb-6 bg-gradient-to-r from-orange-400 to-orange-600 text-transparent bg-clip-text font-medium">
          Now is the right time to pivot your digital strategy.
        </p>
        <p className="text-xl md:text-2xl mb-10 bg-gradient-to-r from-orange-400 to-orange-600 text-transparent bg-clip-text font-medium">
          Let's start discussing within minutes!
        </p>
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-10 py-4 rounded-xl transition-all duration-300 text-lg font-semibold transform hover:scale-105 shadow-lg">
            <a href="">Free Consultation</a>
          </button>
          <button className="bg-transparent border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-10 py-4 rounded-xl transition-all duration-300 text-lg font-semibold transform hover:scale-105 shadow-lg">
            <a href="">Agency Website</a>
          </button>
        </div>
      </div>
      <div className="mt-12 md:mt-0 md:w-1/2">
        <img
          src="/missing pieace.webp"
          alt="Missing Piece Illustration"
          className="max-w-full md:max-w-2xl mx-auto transform hover:scale-105 transition-transform duration-300"
        />
      </div>
    </div>
  );
};

export default Final;