import * as motion from "framer-motion/client";

export default function About() {
  return (
    <div className="relative pb-4 lg:pt-40">
      <motion.h2
        whileInView={{ scale: 1, y: 0, opacity: 1 }}
        initial={{ scale: 0.8, y: 50, opacity: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="pt-16 text-center font-roboto-light text-4xl tracking-tight"
      >
        Welcome To My{" "}
        <span className="font-bold text-fuchsia-800">Portfolio!</span>
      </motion.h2>
      <div className="flex flex-wrap">
        <div className="w-full">
          <div className="flex justify-center">
            <div className="my-2 max-w-6xl pt-20 font-roboto-light text-2xl tracking-tight">
              <motion.p
                whileInView={{ scale: 1, y: 0, opacity: 1 }}
                initial={{ scale: 0.8, y: 50, opacity: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.1 + 0.1,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                className="py-2"
              >
                I’m Emaan, a dedicated Front-End Developer with a passion for
                turning ideas into interactive and visually stunning web
                experiences. With a strong foundation in modern web
                technologies, I specialize in creating responsive, user-friendly
                websites that prioritize performance and accessibility.
              </motion.p>
              <br />
              <motion.p
                whileInView={{ scale: 1, y: 0, opacity: 1 }}
                initial={{ scale: 0.8, y: 50, opacity: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.1 + 0.2,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                className="py-2"
              >
                From crafting pixel-perfect interfaces to developing clean,
                maintainable code, I thrive at the intersection of design and
                development. I’m constantly exploring new tools and frameworks
                to stay at the cutting edge of frontend development, ensuring
                that my projects are both innovative and technically sound.
              </motion.p>
              <br />
              <motion.p
                whileInView={{ scale: 1, y: 0, opacity: 1 }}
                initial={{ scale: 0.8, y: 50, opacity: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.1 + 0.3,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                className="py-2"
              >
                Whether I’m building a sleek landing page or a dynamic web
                application, my goal is always the same: to deliver intuitive
                and engaging user experiences that make a lasting impact.
              </motion.p>
              <br />
              <motion.p
                whileInView={{ scale: 1, y: 0, opacity: 1 }}
                initial={{ scale: 0.8, y: 50, opacity: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.1 + 0.4,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                className="py-2"
              >
                Let’s create something extraordinary together!
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
