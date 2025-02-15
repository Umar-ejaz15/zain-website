import { motion } from "framer-motion";

const Frame = () => {
  return (
    <div className="w-full h-screen flex justify-between items-center absolute text-sm px-32 -rotate-12">
      <div className="flex flex-col items-center gap-40">
        <motion.h1
          initial={{ rotate: -12, y: 0 }}
          animate={{ y: [-10, 10, -10] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="bg-amber-500 text-black px-4 py-2 rounded text-xs -rotate-12"
        >
          Search engine optimization (seo)
        </motion.h1>
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [-10, 10, -10] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-20 h-20"
        >
          <img
            className="w-full h-full object-cover rounded-lg"
            src="/plexa-marketing-agency-banner-side-img-03.png"
            alt="SEO illustration"
          />
        </motion.div>
      </div>
      <div className="flex flex-col items-center gap-40">
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [-10, 10, -10] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-20 h-20"
        >
          <img
            className="w-full h-full object-cover rounded-lg"
            src="/plexa-marketing-agency-banner-side-img-04-q1gouipp9vavnbqbeun9v2cgcpryxv1egbwa8cddok.png"
            alt="Website design illustration"
          />
        </motion.div>
        <motion.h1
          initial={{ rotate: 12, y: 0 }}
          animate={{ y: [-10, 10, -10] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="bg-green-500 text-black px-4 py-2 rounded text-xs rotate-12"
        >
          Website designing
        </motion.h1>
      </div>
    </div>
  );
};

export default Frame;