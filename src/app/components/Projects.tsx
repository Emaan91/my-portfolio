import Image from "next/image";
import * as motion from "framer-motion/client";

export default function Projects() {
  return (
    <div className="pb-4 pt-72">
      {/* Title */}
      <motion.h2
        whileInView={{ scale: 1, y: 0, opacity: 1 }}
        initial={{ scale: 0.8, y: 50, opacity: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center font-roboto-light text-4xl tracking-tight"
      >
        My <span className="font-bold text-fuchsia-800">Projects!</span>
      </motion.h2>

      {/* project 1 */}
      <div className="mb-8 pt-24 flex flex-wrap lg:justify-center">
        <motion.div
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: -100, opacity: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.1,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
          className="w-full lg:w-1/4"
        >
          <Image
            src="/project-img.jpg"
            alt="Project Image"
            width={200}
            height={200}
            className="mb-6 rounded"
          />
        </motion.div>
        <motion.div
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: 100, opacity: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.1,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
          className="w-full max-w-xl lg:w-3/4"
        >
          <h6 className="mb-4 font-roboto-light text-xl font-semibold tracking-tight">
            Project Title (with technologies)
          </h6>
          <p className="mb-6 text-lg font-roboto-light tracking-tight">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia
            quidem non saepe provident aperiam laudantium aut consequatur error
            iusto assumenda doloremque, a natus tenetur ea officiis, excepturi
            veniam dignissimos nulla.
          </p>
          <span className="mr-2 rounded-full bg-slate-950 px-2 py-1 border-2 border-fuchsia-800 border-opacity-60 font-roboto-light font-bold tracking-tight text-fuchsia-800">
            Next JS
          </span>
          <span className="mr-2 rounded-full bg-slate-950 px-2 py-1 border-2 border-fuchsia-800 border-opacity-60 font-roboto-light font-bold tracking-tight text-fuchsia-800">
            Tailwind CSS
          </span>
          <span className="mr-2 rounded-full bg-slate-950 px-2 py-1 border-2 border-fuchsia-800 border-opacity-60 font-roboto-light font-bold tracking-tight text-fuchsia-800">
            Framer Motion
          </span>
        </motion.div>
      </div>

      {/* project 2 */}
      <div className="mb-8 pt-24 flex flex-wrap lg:justify-center">
        <motion.div
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: -100, opacity: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.1,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
          className="w-full lg:w-1/4"
        >
          <Image
            src="/project-img.jpg"
            alt="Project Image"
            width={200}
            height={200}
            className="mb-6 rounded"
          />
        </motion.div>
        <motion.div
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: 100, opacity: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.1,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
          className="w-full max-w-xl lg:w-3/4"
        >
          <h6 className="mb-4 font-roboto-light text-xl font-semibold tracking-tight">
            Project Title (with technologies)
          </h6>
          <p className="mb-6 text-lg font-roboto-light tracking-tight">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia
            quidem non saepe provident aperiam laudantium aut consequatur error
            iusto assumenda doloremque, a natus tenetur ea officiis, excepturi
            veniam dignissimos nulla.
          </p>
          <span className="mr-2 rounded-full bg-slate-950 px-2 py-1 border-2 border-fuchsia-800 border-opacity-60 font-roboto-light font-bold tracking-tight text-fuchsia-800">
            Next JS
          </span>
          <span className="mr-2 rounded-full bg-slate-950 px-2 py-1 border-2 border-fuchsia-800 border-opacity-60 font-roboto-light font-bold tracking-tight text-fuchsia-800">
            Tailwind CSS
          </span>
          <span className="mr-2 rounded-full bg-slate-950 px-2 py-1 border-2 border-fuchsia-800 border-opacity-60 font-roboto-light font-bold tracking-tight text-fuchsia-800">
            Framer Motion
          </span>
        </motion.div>
      </div>

      {/* project 3 */}
      <div className="mb-8 pt-24 flex flex-wrap lg:justify-center">
        <motion.div
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: -100, opacity: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.1,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
          className="w-full lg:w-1/4"
        >
          <Image
            src="/project-img.jpg"
            alt="Project Image"
            width={200}
            height={200}
            className="mb-6 rounded"
          />
        </motion.div>
        <motion.div
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: 100, opacity: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.1,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
          className="w-full max-w-xl lg:w-3/4"
        >
          <h6 className="mb-4 font-roboto-light text-xl font-semibold tracking-tight">
            Project Title (with technologies)
          </h6>
          <p className="mb-6 text-lg font-roboto-light tracking-tight">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia
            quidem non saepe provident aperiam laudantium aut consequatur error
            iusto assumenda doloremque, a natus tenetur ea officiis, excepturi
            veniam dignissimos nulla.
          </p>
          <span className="mr-2 rounded-full bg-slate-950 px-2 py-1 border-2 border-fuchsia-800 border-opacity-60 font-roboto-light font-bold tracking-tight text-fuchsia-800">
            Next JS
          </span>
          <span className="mr-2 rounded-full bg-slate-950 px-2 py-1 border-2 border-fuchsia-800 border-opacity-60 font-roboto-light font-bold tracking-tight text-fuchsia-800">
            Tailwind CSS
          </span>
          <span className="mr-2 rounded-full bg-slate-950 px-2 py-1 border-2 border-fuchsia-800 border-opacity-60 font-roboto-light font-bold tracking-tight text-fuchsia-800">
            Framer Motion
          </span>
        </motion.div>
      </div>

      {/* project 4 */}
      <div className="mb-8 pt-24 flex flex-wrap lg:justify-center">
        <motion.div
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: -100, opacity: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.1,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
          className="w-full lg:w-1/4"
        >
          <Image
            src="/project-img.jpg"
            alt="Project Image"
            width={200}
            height={200}
            className="mb-6 rounded"
          />
        </motion.div>
        <motion.div
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: 100, opacity: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.1,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
          className="w-full max-w-xl lg:w-3/4"
        >
          <h6 className="mb-4 font-roboto-light text-xl font-semibold tracking-tight">
            Project Title (with technologies)
          </h6>
          <p className="mb-6 text-lg font-roboto-light tracking-tight">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia
            quidem non saepe provident aperiam laudantium aut consequatur error
            iusto assumenda doloremque, a natus tenetur ea officiis, excepturi
            veniam dignissimos nulla.
          </p>
          <span className="mr-2 rounded-full bg-slate-950 px-2 py-1 border-2 border-fuchsia-800 border-opacity-60 font-roboto-light font-bold tracking-tight text-fuchsia-800">
            Next JS
          </span>
          <span className="mr-2 rounded-full bg-slate-950 px-2 py-1 border-2 border-fuchsia-800 border-opacity-60 font-roboto-light font-bold tracking-tight text-fuchsia-800">
            Tailwind CSS
          </span>
          <span className="mr-2 rounded-full bg-slate-950 px-2 py-1 border-2 border-fuchsia-800 border-opacity-60 font-roboto-light font-bold tracking-tight text-fuchsia-800">
            Framer Motion
          </span>
        </motion.div>
      </div>
    </div>
  );
}
