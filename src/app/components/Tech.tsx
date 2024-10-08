import {
  RiReactjsLine,
  RiBootstrapLine,
  RiHtml5Line,
  RiTailwindCssFill,
  RiCss3Fill,
  RiNextjsLine,
} from "react-icons/ri";
import * as motion from "framer-motion/client";

export default function Tech() {
  return (
    <div className="pb-4 pt-72">
      {/* Title */}
      <motion.h2
        whileInView={{ scale: 1, y: 0, opacity: 1 }}
        initial={{ scale: 0.8, y: 50, opacity: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center font-roboto-light text-4xl text-white tracking-tight"
      >
        <span className="font-bold text-fuchsia-800">Technologies </span>I Use!
      </motion.h2>

      {/* Logos */}
      <div className="pt-40 flex flex-wrap items-center justify-center gap-6">
        {/* React Logo */}
        <motion.div initial="original" whileHover="hovered">
          <motion.div
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: -10, opacity: 0 }}
            transition={{
              duration: 1,
              delay: 0.1,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.2, transition: { duration: 0.2, delay: 0 } }}
            className="rounded-2xl border-4 border-violet-950 p-4"
            style={{
              background:
                "linear-gradient(to top left, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 25%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0) 75%, rgba(255, 255, 255, 0) 100%)",
            }}
          >
            <RiReactjsLine className="text-7xl text-cyan-400" />
            <div className="flex items-center justify-center">
              <motion.span
                variants={{
                  original: { y: 30, opacity: 0 },
                  hovered: { y: 0, opacity: 1 },
                }}
                transition={{ duration: 0.2, delay: 0 }}
                className="bottom-32 absolute rounded-full px-2 py-1 border-2 border-violet-950 text-sm font-roboto-light tracking-tight"
              >
                React
              </motion.span>
            </div>
          </motion.div>
        </motion.div>

        {/* Bootstrap Logo */}
        <motion.div initial="original" whileHover="hovered">
          <motion.div
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: -10 + -50, opacity: 0 }}
            transition={{
              duration: 1,
              delay: 0.1,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.2, transition: { duration: 0.2, delay: 0 } }}
            className="rounded-2xl border-4 border-violet-950 p-4"
            style={{
              background:
                "linear-gradient(to top left, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 25%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0) 75%, rgba(255, 255, 255, 0) 100%)",
            }}
          >
            <RiBootstrapLine className="text-7xl text-white" />
            <div className="flex items-center justify-center">
              <motion.span
                variants={{
                  original: { y: 30, opacity: 0 },
                  hovered: { y: 0, opacity: 1 },
                }}
                transition={{ duration: 0.2, delay: 0 }}
                className="bottom-32 absolute rounded-full px-2 py-1 border-2 border-violet-950 text-sm font-roboto-light tracking-tight"
              >
                Bootstrap
              </motion.span>
            </div>
          </motion.div>
        </motion.div>

        {/* HTML Logo */}
        <motion.div initial="original" whileHover="hovered">
          <motion.div
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: -10 + -50 + -50, opacity: 0 }}
            transition={{
              duration: 1,
              delay: 0.1,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.2, transition: { duration: 0.2, delay: 0 } }}
            className="rounded-2xl border-4 border-violet-950 p-4"
            style={{
              background:
                "linear-gradient(to top left, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 25%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0) 75%, rgba(255, 255, 255, 0) 100%)",
            }}
          >
            <RiHtml5Line className="text-7xl text-green-500" />
            <div className="flex items-center justify-center">
              <motion.span
                variants={{
                  original: { y: 30, opacity: 0 },
                  hovered: { y: 0, opacity: 1 },
                }}
                transition={{ duration: 0.2, delay: 0 }}
                className="bottom-32 absolute rounded-full px-2 py-1 border-2 border-violet-950 text-sm font-roboto-light tracking-tight"
              >
                HTML
              </motion.span>
            </div>
          </motion.div>
        </motion.div>

        {/* Tailwind */}
        <motion.div initial="original" whileHover="hovered">
          <motion.div
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: -10 + -50 + -50 + -50, opacity: 0 }}
            transition={{
              duration: 1,
              delay: 0.1,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.2, transition: { duration: 0.2, delay: 0 } }}
            className="rounded-2xl border-4 border-violet-950 p-4"
            style={{
              background:
                "linear-gradient(to top left, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 25%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0) 75%, rgba(255, 255, 255, 0) 100%)",
            }}
          >
            <RiTailwindCssFill className="text-7xl text-red-700" />
            <div className="flex items-center justify-center">
              <motion.span
                variants={{
                  original: { y: 30, opacity: 0 },
                  hovered: { y: 0, opacity: 1 },
                }}
                transition={{ duration: 0.2, delay: 0 }}
                className="bottom-32 absolute rounded-full px-2 py-1 border-2 border-violet-950 text-sm font-roboto-light tracking-tight"
              >
                Tailwind
              </motion.span>
            </div>
          </motion.div>
        </motion.div>

        {/* CSS */}
        <motion.div initial="original" whileHover="hovered">
          <motion.div
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: -10 + -50 + -50 + -50 + -50, opacity: 0 }}
            transition={{
              duration: 1,
              delay: 0.1,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.2, transition: { duration: 0.2, delay: 0 } }}
            className="rounded-2xl border-4 border-violet-950 p-4"
            style={{
              background:
                "linear-gradient(to top left, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 25%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0) 75%, rgba(255, 255, 255, 0) 100%)",
            }}
          >
            <RiCss3Fill className="text-7xl text-yellow-500" />
            <div className="flex items-center justify-center">
              <motion.span
                variants={{
                  original: { y: 30, opacity: 0 },
                  hovered: { y: 0, opacity: 1 },
                }}
                transition={{ duration: 0.2, delay: 0 }}
                className="bottom-32 absolute rounded-full px-2 py-1 border-2 border-violet-950 text-sm font-roboto-light tracking-tight"
              >
                CSS
              </motion.span>
            </div>
          </motion.div>
        </motion.div>

        {/* Next JS */}
        <motion.div initial="original" whileHover="hovered">
          <motion.div
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: -10 + -50 + -50 + -50 + -50 + -50, opacity: 0 }}
            transition={{
              duration: 1,
              delay: 0.1,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.2, transition: { duration: 0.2, delay: 0 } }}
            className="rounded-2xl border-4 border-violet-950 p-4"
            style={{
              background:
                "linear-gradient(to top left, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 25%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0) 75%, rgba(255, 255, 255, 0) 100%)",
            }}
          >
            <RiNextjsLine className="text-7xl text-pink-700" />
            <div className="flex items-center justify-center">
              <motion.span
                variants={{
                  original: { y: 30, opacity: 0 },
                  hovered: { y: 0, opacity: 1 },
                }}
                transition={{ duration: 0.2, delay: 0 }}
                className="bottom-32 absolute rounded-full px-2 py-1 border-2 border-violet-950 text-sm font-roboto-light tracking-tight"
              >
                Next JS
              </motion.span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
