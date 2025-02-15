import Card from "./Card";

const Help = () => {
  const data = [
    {
      img: "/public/brand.png",
      title: "Branding Stuff",
      description:
        "Craft a lasting and influential brand identity that consistently sets you apart as a professional. Achieving a polished look has never been easier.",
    },
    {
      img: "/public/web.png",
      title: "Stunning Website",
      description:
        "WordPress equips you with everything essential for success while offering a custom CMS, minus the hassles found on other platforms.",
    },
    {
      img: "/public/seo.png",
      title: "Search Engine Optimization (SEO)",
      description:
        " Your business demands peak performance, not just a pretty facade. Discover how we turbocharge your success with our SEO expertise!",
    },
  ];
  return (
    <div>
      <div className="flex gap-1 justify-center items-center mt-10">
        <div className="border-b-2 border-gray-400/20 w-1/2"></div>
        <div>
          <h1 className="text-center text-xs md:text-xs lg:text-xs px-4">
            HOW I CAN HELP YOU
          </h1>
        </div>
        <div className="border-b-[1px] border-gray-400/20 my-5 w-1/2"></div>
      </div>{" "}
      <div className="w-full h-auto mt-10 px-20">
        <h1 className="text-5xl w-2/3 font-bold">
          I{" "}
          <span className=" bg-gradient-to-b from-[#4474E3] to-[#4E58DF] text-transparent bg-clip-text">
            take on the stress
          </span>{" "}
          of designing, building, and managing your website
        </h1>
        <p className="text-3xl w-2/3 mt-5">
          So you can spend more time building your product and working on your
          main business goals.
        </p>
      </div>
      <div className="cards grid grid-cols-3 gap-5 px-20 mt-20">
        {data.map((item, index) => {
          return (
            <Card
              key={index}
              img={item.img}
              title={item.title}
              description={item.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Help;
