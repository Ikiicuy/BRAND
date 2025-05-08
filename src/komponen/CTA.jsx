import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const CTA = () => {
  return (
    <motion.section
      id="gabung"
      className="mx-4 md:mx-8 lg:mx-16 xl:mx-24 my-8 p-4 md:p-8 bg-[#93C5FD] border-2 border-black dark:shadow-[4px_4px_0px_#E2E8F0] shadow-[4px_4px_0px_#94A3B8]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
    >
      <motion.h2
        className="text-2xl font-head font-semibold mb-4 text-white dark:text-[#EFF6FF] bg-[#3B82F6] p-2 border-2 border-black shadow-[4px_4px_0px_#E2E8F0]"
        variants={fadeUp}
      >
        Tertarik bergabung bersama kami?
      </motion.h2>

      <motion.p
        className="mb-6 dark:text-white font-medium text-[#1F2937]"
        variants={fadeUp}
      >
        Eksplorasi kreativitasmu dalam dunia media, animasi, dan desain.
      </motion.p>
      
<motion.div className="flex md:grid lg:grid lg:grid-cols-2 md:grid-cols-2 gap-4"
        variants={fadeUp}
>
      <button
        className="bg-[#6366F1] text-white font-bold py-2 px-4 border-2 border-black transform shadow-[4px_4px_0px_#E2E8F0] active:shadow-none active:translate-x-1 active:translate-y-1 transition duration-300 font-body hover:bg-[#EFF6FF] font-semibold hover:text-[#1F2937]"
      >
        Bergabung sekarang
      </button>
      <button
        className="bg-[#6366F1] text-white font-bold py-2 px-4 border-2 border-black transform shadow-[4px_4px_0px_#E2E8F0] active:shadow-none active:translate-x-1 active:translate-y-1 transition duration-300 font-body hover:bg-[#EFF6FF] font-semibold hover:text-[#1F2937]"
      >
      <a
        href="https://www.instagram.com/brand_pgri1balaraja?igsh=eWNuM3c4MmlvaDBi">
        Instagram
      </a>
      </button>
      </motion.div>
    </motion.section>
  );
};

export default CTA;
