import { Link } from "react-scroll";
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

const Beranda = () => {
  return (
    <section
      id="beranda"
      className="min-h-screen md:text-center flex flex-col items-center justify-center dark:bg-[#1F2937] px-4 md:px-8 lg:px-16 relative overflow-hidden"
    >
      {/* Background gradient circle */}
    

      <motion.h2
        className="font-semibold font-body mb-2 text-md md:text-xl text-left
        md:text-center lg:text-center w-full md:w-3/4 lg:w-2/3 xl:w-1/2"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={1}
      >
        Selamat Datang di
      </motion.h2>

      <motion.h1
        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 text-left
        w-full md:w-3/4 lg:w-2/3 xl:w-1/2 font-head text-[#38BDF8]
        md:text-center lg:text-center"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={2}
      >
        BRAND
      </motion.h1>

      <motion.p
        className="mb-16 text-sm md:text-base text-left w-full md:w-3/4 lg:w-2/3 xl:w-1/2 mt-4 font-body md:text-center lg:text-center"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={3}
      >
        BRAND singkatan dari Broadcasting, Animasi dan Design adalah ekstrakurikuler dari{" "}
        <a
          href="https://smkpgri1balaraja.sch.id/"
          className="text-blue-500 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          SMKS PGRI 1 BALARAJA
        </a>
        . Kami bertujuan untuk membantu siswa menjadi lebih kreatif dan inovatif dalam menghadapi tantangan di era digital.
      </motion.p>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={4}
      >
        <Link to="gabung" smooth duration={500}>
          <button className="bg-black text-white font-bold py-2 px-6 border-2 border-black transform dark:shadow-[4px_4px_0px_#E2E8F0] shadow-[4px_4px_0px_#94A3B8] active:shadow-none active:translate-x-1 active:translate-y-1 transition duration-300 font-body">
            Join Now
          </button>
        </Link>
      </motion.div>
    </section>
  );
};

export default Beranda;
