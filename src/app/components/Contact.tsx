import Link from "next/link";
import * as motion from "framer-motion/client";

export default function Contact() {
  return (
    <div className="pb-56 pt-72">
      {/* Title */}
      <motion.h2
        whileInView={{ scale: 1, y: 0, opacity: 1 }}
        initial={{ scale: 0.8, y: 50, opacity: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="my-10 text-center font-roboto-light text-4xl tracking-tight"
      >
        Feel Free To
        <span className="font-bold text-fuchsia-800"> Contact Me!</span>
      </motion.h2>

      <div className="pt-12 text-center font-roboto-light text-2xl tracking-tight">
        {/* Upwork */}
        <motion.div
          whileInView={{ scale: 1, y: 0, opacity: 1 }}
          initial={{ scale: 0.8, y: 50, opacity: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="my-8"
        >
          <Link
            className="text-fuchsia-800 underline hover:text-fuchsia-500"
            href="https://www.upwork.com/freelancers/~01525e85eb3163e499"
          >
            Upwork
          </Link>
        </motion.div>

        {/* LinkedIn */}
        <motion.div
          whileInView={{ scale: 1, y: 0, opacity: 1 }}
          initial={{ scale: 0.8, y: 50, opacity: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="my-8"
        >
          <Link
            className="text-fuchsia-800 underline hover:text-fuchsia-500"
            href="https://www.linkedin.com/in/emaan-arshad-82134b219/"
          >
            LinkedIn
          </Link>
        </motion.div>

        {/* Email */}
        <motion.div
          whileInView={{ scale: 1, y: 0, opacity: 1 }}
          initial={{ scale: 0.8, y: 50, opacity: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="my-8"
        >
          <p>
            Email at:
            <a
              href="mailto:emaanfiverr@gmail.com"
              className="text-fuchsia-800 underline ml-2 hover:text-fuchsia-500"
            >
              emaanfiverr@gmail.com
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
