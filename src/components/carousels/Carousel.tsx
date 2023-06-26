import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi2";

const Carousel = () => {
  const [images, setImages] = useState([
    {
      name: "venue-01",
      src: "/assets/images/venue-01.png",
    },
    {
      name: "venue-02",
      src: "/assets/images/venue-02.png",
    },
    {
      name: "venue-03",
      src: "/assets/images/venue-03.png",
    },
  ]);

  const handleNext = () => {
    const array = [...images];
    const first = array.shift()!;
    array.push(first)!;

    setImages(array);
  };

  const handlePrev = () => {
    const array = [...images];
    const last = array.pop()!;
    array.unshift(last);

    setImages(array);
  };

  return (
    <div className="w-full h-fit relative flex flex-col items-center justify-center gap-8 z-10">
      <AnimatePresence mode="popLayout">
        <motion.div
          layout
          className="w-[min(100%,600px)] h-[80vh] sm:h-[90vh] relative flex items-center justify-between"
        >
          {images.map((image, idx) => (
            <motion.img
              animate={{
                x: `-${52.5 - idx * 2.5}%`,
                y: `${idx * -5}%`,
                rotate: `${idx * 2}deg`,
                zIndex: 5 - idx,
              }}
              transition={{ exit: { duration: 2 } }}
              key={image.name}
              src={image.src}
              alt={image.name}
              className="w-[min(80%,360px)] absolute left-1/2 pointer-events-none"
            />
          ))}
          <button
            className="absolute top-1/2 left-[5%] -translate-y-1/2"
            onClick={handlePrev}
          >
            <HiChevronLeft size={40} />
          </button>
          <button
            className="absolute top-1/2 right-[5%] -translate-y-1/2"
            onClick={handleNext}
          >
            <HiChevronRight size={40} />
          </button>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Carousel;
