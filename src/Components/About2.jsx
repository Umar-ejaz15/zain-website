const About2 = () => {
  return (
    <div className="w-full h-auto relative flex flex-col justify-center px-5 items-center ">
      <div className="bg-[#191923] w-full h-full  rounded-md px-5 py-5 ">
        <h1 className=" text-3xl mt-5 md:text-7xl lg:text-6xl w-full md:w-full lg:w-3/4 tighter font-bold leading-none">
          🚀 YOU FOCUS ON GROWTH—{" "}
          <span className="bg-gradient-to-r from-[#FF8B57] via-orange-500 to-[#FF8B57] bg-clip-text text-transparent">
            I'LL HANDLE THE MARKETING.
          </span>{" "}
        </h1>{" "}
        <div className="border-b-2 border-gray-200/20 w-full mt-5 mb-5"></div>
        <div className="text-2xl md:text-4xl lg:text-4xl space-y-8">
          <p>
            You've got enough on your plate. SEO, social media, and marketing strategies? 
            Leave that to me. With your business and my marketing—winning is inevitable.
          </p>
          <p>
            My mission? To take your brand from "just another company" to a market leader. 
            Whether you need a data-driven SEO strategy, high-converting social media campaigns, 
            or Reddit marketing that actually works, I've got you covered.
          </p>
          <p className="space-y-4">
            <li>🔍 Need to rank higher on Google? Done. Book a strategy session now!</li>
            <li>📈 Want engagement that actually converts? Easy. Let's make it happen!</li>
            <li>⚡ Looking to tap into Reddit for insane organic growth? I'm your guy. Let's dominate the platform.</li>
            <li>📢 Need a full marketing revamp? Let's craft a strategy tailored to your brand. Get in touch now!</li>
            <li>🚀 Still unsure? Let's discuss your goals and see how I can help. Schedule a free consultation today!</li>
          </p>
          <p className="font-bold">
            Let's build something that doesn't just exist—but DOMINATES. 📩 Ready to grow? Let's talk today
          </p>
        </div>
      </div>
    </div>
  );
};

export default About2;