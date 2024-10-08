import * as motion from "framer-motion/client";

export default function Hero() {
  return (
    <div className="pb-4 lg:pt-12 lg:mb-60 relative">
      <div className="flex flex-wrap">
        <div className="w-full">
          {/* Title Wrapper */}
          <div className="relative">
            {/* Title Background */}
            <div className="flex flex-col items-center lg:items-start">
              <motion.h1
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                className="text-6xl lg:text-9xl lg:pt-28 px-12 lg:pl-12 font-new-york-escape relative z-0"
              >
                EMAAN ARSHAD
              </motion.h1>
            </div>

            {/* Image Container */}
            <div className="w-1/2 p-8 hidden lg:flex place-items-center">
              <div className="">
                <motion.img
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                  src="/main-img.jpg"
                  alt="Hero Image"
                  width={400}
                  height={400}
                  className="absolute w-80 right-9 top-1 rounded-2xl border-r-4 border-b-4 border-fuchsia-700 border-opacity-50 z-10"
                ></motion.img>
              </div>
            </div>

            {/* Title Outline */}

            <div className="hidden lg:flex flex-col items-center lg:items-start">
              <motion.h1
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                className="title_outline text-6xl lg:text-9xl lg:pt-28 lg:pl-12 font-new-york-escape text-transparent stroke-2 absolute top-0 left-0 z-20"
              >
                EMAAN ARSHAD
              </motion.h1>
            </div>
          </div>

          {/* Subtitle */}
          <div className="flex flex-col items-center px-12 lg:items-start lg:pl-24">
            <motion.span
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
              className="bg-gradient-to-r from-pink-400 via-slate-500 to-fuchsia-800 bg-clip-text tracking-tight text-transparent text-3xl font-roboto-light font-bold z-40"
            >
              Front-End Developer with a passion for creating stunning websites.
            </motion.span>
          </div>
        </div>
      </div>
    </div>
  );
}
