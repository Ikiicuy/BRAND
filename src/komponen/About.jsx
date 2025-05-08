import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const About = () => {
  return (
    <section
      id="tentang"
      className="min-h-screen px-4 py-20 bg-[#EFF6FF] dark:bg-[#1F2937] font-body"
    >
      <motion.h2
        className="text-3xl font-head font-bold mb-8 text-[#1F2937] dark:text-[#EFF6FF] bg-[#93C5FD] p-2 border-2 border-black dark:shadow-[4px_4px_0px_#E2E8F0] shadow-[4px_4px_0px_#94A3B8] text-center max-w-max mx-auto"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={1}
      >
        Tentang Kami
      </motion.h2>

      <motion.div
        className="mb-8 max-w-4xl mx-auto bg-[#93C5FD] p-6 md:p-8 border-2 border-black shadow-[4px_4px_0px_#94A3B8] dark:shadow-[4px_4px_0px_#E2E8F0] rounded-md"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={2}
      >
        <h3 className="text-xl md:text-2xl font-bold mb-2 dark:text-white text-black">
          Visi
        </h3>
        <ul className="list-decimal list-inside dark:text-white text-black font-medium space-y-2">
          <li>Menjadi pelopor kreativitas di bidang media dan desain.</li>
          <li>
            Meningkatkan kualitas sumber daya manusia yang kreatif, inovatif, dan
            berdaya saing tinggi.
          </li>
        </ul>
      </motion.div>

      <motion.div
        className="max-w-4xl mx-auto bg-[#93C5FD] p-6 md:p-8 border-2 border-black shadow-[4px_4px_0px_#94A3B8] dark:shadow-[4px_4px_0px_#E2E8F0] rounded-md"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={3}
      >
        <h3 className="text-xl md:text-2xl font-bold mb-2 dark:text-white text-black">
          Misi
        </h3>
        <ul className="list-decimal list-inside dark:text-white text-black font-medium space-y-2">
          <li>
            Mendorong siswa untuk mengembangkan keterampilan broadcasting, animasi, dan desain secara kreatif dan profesional.
          </li>
          <li>
            Mempersiapkan siswa untuk menjadi tenaga kerja yang siap pakai dan
            berkompetensi tinggi di industri kreatif.
          </li>
        </ul>
      </motion.div>
    </section>
  );
};

export default About;
