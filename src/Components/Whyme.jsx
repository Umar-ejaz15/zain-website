import Service from "./Service";

const Whyme = () => {
  const data = [
    {
      img: "/transperency.webp",
      txt: "  Transparency About Project",
    },
    {
      img: "/growth.webp",
      txt: "Growth-Oriented Approach",
    },
    {
      img: "/exterm.webp",
      txt: "Extremely Fast Execution",
    },
    {
      img: "/solutions.webp",
      txt: "Customized Solutions",
    },
  ];
  return (
    <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="bg-gradient-to-b rounded-3xl shadow-xl w-full from-[#34046E] to-[#06154A] flex flex-col lg:flex-row gap-8 p-4 sm:p-8 lg:p-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:w-3/5">
          {data.map((item, index) => (
            <Service img={item.img} txt={item.txt} key={index} />
          ))}
        </div>
        <div className="lg:w-2/5 flex items-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
            <span className="bg-gradient-to-r from-[#FFD700] to-[#FF8C00] text-transparent bg-clip-text">
              Working with Zain is as
            </span>{" "}
            easy as writing these facts
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Whyme;