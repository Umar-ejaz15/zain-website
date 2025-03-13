const About = () => {
  return (
    <>
      <div className="flex gap-1 justify-center items-center">
        <div className="border-b-2 border-gray-400/20 w-1/2"></div>
        <div>
          <h1 className="text-center text-xs md:text-xs lg:text-xs px-4 text-white">
            A LITTLE ABOUT ME
          </h1>
        </div>
        <div className="border-b-[1px] border-gray-400/20 my-5 w-1/2"></div>
      </div>{" "}
      <div className="w-full min-h-screen flex flex-col lg:flex-row justify-center px-5  gap-6 md:gap-8 lg:gap-10  py-6">
        <div className="w-full lg:w-2/3 bg-[#191923] rounded-xl lg:rounded-md p-6 md:p-8 lg:p-10">
          <div className="flex flex-col gap-3">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              WHO'S BEHIND{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-purple to-blue-600">
                ALL THIS GROWTH?
              </span>
            </h1>
            <div className="border-b-[1px] border-gray-400/20 my-5"></div>
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-200">
              This is Zain Ul Abdin, a Product Marketing Specialist & Growth Strategist who lives and breathes digital marketing. From SEO dominance to Reddit growth hacking, I don't just follow trends—I create them. (I know what you're thinking... "Another marketing guy hyping himself up." But stay with me.)
            </p>
            <p className="text-xl md:text-2xl lg:text-3xl mt-4 text-gray-200">
              What sets me apart in the digital marketing landscape? Let me break it down:
            </p>
            <p className="text-xl md:text-2xl lg:text-3xl mt-4 space-y-4 text-gray-300">
              <li>💥 Reddit Marketing: I've driven THOUSANDS of conversions while others are still figuring out how to post. My strategies have consistently delivered 10x ROI for clients.</li>
              <li>⚡ SEO: I've ranked SaaS products on Google's front page before their competitors even knew what keywords to target. My proven framework has helped clients achieve 300% increase in organic traffic.</li>
              <li>🎯 Social Media Growth: I've taken brands from invisible to viral across LinkedIn, Instagram, and TikTok. We're talking 0 to 100K+ followers in months, not years.</li>
              <li>🚀 Content That Converts: I write stuff that doesn't just get clicks—it drives sales. My content strategies have generated millions in revenue for SaaS companies.</li>
            </p>
            <p className="text-xl md:text-2xl lg:text-3xl mt-4 text-gray-200">
              But can't you just do this yourself? (Oh, I love this one.) Sure, just like I could build my own furniture… but would it hold my coffee? Probably not. Why should you trust me? Because I've done it. I've scaled SaaS products to 50,000+ organic users, delivered millions of impressions, and turned engagement into revenue—all without burning cash on useless ads. (Think of me as your marketing cheat code—but legal, ethical, and ridiculously effective.)
            </p>
            <p className="text-xl md:text-2xl lg:text-3xl mt-4 text-gray-300">
              🔍 Want proof? Check out my case studies. Or better yet, let's make YOUR business the next success story.
            </p>
            <button className="text-left w-fit mt-8 lg:mt-10 border border-white text-white px-4 py-2 rounded hover:bg-white hover:text-black transition-colors duration-300">
              📩 Let's Talk
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