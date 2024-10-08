import Link from "next/link";
import Image from "next/image";
import { FaSquareUpwork } from "react-icons/fa6";
import { FaLinkedin, FaGithub, FaStackOverflow } from "react-icons/fa";
import * as motion from "framer-motion/client";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ scale: 1.02, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1, delay: 1.5 }}
      className="mb-20 flex items-center justify-between pt-6 pb-6"
    >
      <div className="flex flex-shrink-0 items-center">
        {/* Logo */}

        <Image
          className="mx-10"
          src="./emaan-logo.png"
          alt="logo"
          width={80}
          height={80}
        />
      </div>

      {/* Links */}

      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <Link
          className="hover:scale-110 hover:animate-spin focus:scale-110 focus:animate-spin"
          href="https://www.upwork.com/freelancers/~01525e85eb3163e499"
        >
          <FaSquareUpwork />
        </Link>
        <Link
          className="hover:scale-110 hover:animate-spin focus:scale-110 focus:animate-spin"
          href="https://www.linkedin.com/in/emaan-arshad-82134b219/"
        >
          <FaLinkedin />
        </Link>
        <Link
          className="hover:scale-110 hover:animate-spin focus:scale-110 focus:animate-spin"
          href="https://github.com/Emaan91"
        >
          <FaGithub />
        </Link>
        <Link
          className="hover:scale-110 hover:animate-spin focus:scale-110 focus:animate-spin"
          href="https://stackoverflow.com/users/27587403/emaan-arshad"
        >
          <FaStackOverflow />
        </Link>
      </div>
    </motion.nav>
  );
}
