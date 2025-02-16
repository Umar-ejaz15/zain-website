import Client from "./Client";

const Reviews = () => {
  const data = [
    {
      img: "https://usmanbashir.net/wp-content/uploads/2023/06/joao-braga.webp",
      description:
        "I can't say enough about Usman's work on my ecommerce website. He's done an outstanding job designing and optimizing it. My online store has never looked better, thanks to him!",
      name: "Abdullah Shahid",
      profession: " Co-Founder, MTR Co.",
    },
    {
      img: "https://usmanbashir.net/wp-content/uploads/2023/10/fitz-garcia-review-usmanbashir.png",
      description:
        "Usman has been a game-changer for our marketing team. His insights and expertise have been invaluable in driving our online presence. Thanks to his efforts, we achieved a remarkable 15% increase in website traffic within just three months. Usman is a true asset to our marketing efforts, and we highly recommend his services.",
      name: "Fitz Garcia",
      profession: " Marketing Manager, StartFleet LLC",
    },
    {
      img: "https://usmanbashir.net/wp-content/uploads/2023/06/michael-ruml.webp",
      description:
        "Usman is a gem. He takes care of my blogs like a pro, ensuring spotless articles and top-notch on-page SEO. Thanks to his expertise, my website's visibility has soared. For a serious boost to your online presence, Usman's your go-to guy. Highly recommended!",
      name: "Adam Smith ",
      profession: "   Director, ElevateSphere",
    },
  ];
  return (
    <div className="w-full h-auto bg-blue-600 px-5 md:px-20  py-5 md:py-20">
      <div className="grid grid-col-1 md:grid-cols-2 bg-[#01051B] rounded-4xl gap-10 px-5 md:gap-10 md:px-20 py-6">
        <div className="left ">
          <h2 className="text-4xl  md:text-7xl bg-gradient-to-b from-[#76FAB4] to-[#76FAB4] text-transparent bg-clip-text font-bold">
            Working with Usman is like having a superhero on your side. He's
            always on top of things when it comes to search engine optimization
            and knows exactly what to do to get our website and content ranking
            higher in search results. He's been a lifesaver for my business and
            I can't imagine what we would do without him.
          </h2>
        </div>
        <div className="right">
          <div className="client grid grid-cols-1 gap-10">
            {data.map((items, key) => {
              return (
                <Client
                  key={key}
                  img={items.img}
                  description={items.description}
                  name={items.name}
                  profession={items.profession}
                />
              );
            })}
          </div>
        </div>
        <div>
          <img src="/company logos.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
