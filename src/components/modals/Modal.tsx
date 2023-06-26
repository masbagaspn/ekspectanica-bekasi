import { motion } from "framer-motion";

interface ModalProps {
  children: React.ReactNode;
  handleClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, handleClose }) => {
  return (
    <motion.div
      onClick={handleClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        animate: { when: "beforeChildren" },
        exit: { when: "afterChildren" },
        duration: 0.5,
      }}
      className="w-full h-full fixed top-0 left-0 bg-black/30 backdrop-blur-sm grid place-content-center z-50"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.75 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.75 }}
        transition={{ duration: 0.5 }}
        className="w-[min(80vw,600px)] h-[80vh] md:h-fit md:max-h-[95vh] bg-white rounded-md text-neutral-900 relative overflow-y-auto z-40"
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default Modal;
