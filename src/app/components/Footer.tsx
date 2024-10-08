import * as motion from "framer-motion/client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
      viewport={{ once: true }}
      className="py-4 text-center"
    >
      <p className="text-lg font-roboto-light tracking-tight">
        &copy; {currentYear} Emaan Arshad
      </p>
    </motion.footer>
  );
}
