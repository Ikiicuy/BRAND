import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/pagination';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const Gallery = () => {
  const images = [
    { src: '/1.jpg', alt: 'Gambar 1' },
    { src: '/2.jpg', alt: 'Gambar 2' },
    { src: '/3.jpg', alt: 'Gambar 3' },
    { src: '/4.jpg', alt: 'Gambar 4' },
  ];

  return (
    <motion.section
      id="galeri"
      className="dark:bg-[#1F2937] px-4 py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
    >
      <motion.h2
        className="text-3xl font-bold mb-6 border-b-2 border-black dark:border-white pb-2"
        variants={fadeUp}
        custom={1}
      >
        Gallery
      </motion.h2>

      <Swiper
        modules={[Autoplay, Pagination]}
        loop={true}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        spaceBetween={16}
        breakpoints={{
          320: { slidesPerView: 1.2 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 2.5 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-10"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="rounded overflow-hidden">
            <motion.img
              src={image.src}
              alt={image.alt}
              className="w-full h-60 object-cover border-2 border-black dark:border-white shadow-lg rounded transition-transform duration-300 hover:scale-105 active:scale-110"
              variants={fadeUp}
              custom={index + 2}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.section>
  );
};

export default Gallery;
