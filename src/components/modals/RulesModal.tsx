import Modal from "./Modal";
import { HiOutlineXMark, HiCheck } from "react-icons/hi2";

interface RulesModalProps {
  dos: string[];
  donts: string[];
  handleClose: () => void;
}

const RulesModal: React.FC<RulesModalProps> = ({ dos, donts, handleClose }) => {
  return (
    <Modal handleClose={handleClose}>
      <div className="w-full flex flex-col z-20">
        <header className="sticky top-0 flex bg-white/70 backdrop-blur-sm justify-between py-2 px-6 border-b border-neutral-900/30 rounded-tr-md rounded-tl-md shadow-sm">
          <h3 className="text-lg font-bold">DOs & DON'Ts</h3>
          <button onClick={handleClose}>
            <HiOutlineXMark size={20} strokeWidth={2} />
          </button>
        </header>
        <div className="bg-white p-6 space-y-8 z-50">
          <div>
            <h4 className="font-bold mb-2">DOs</h4>
            <ul className="flex flex-col gap-1">
              {dos.map((rule, idx) => (
                <li key={idx} className="flex gap-2 text-sm">
                  <span className="w-4 h-4">
                    <HiCheck size={16} />
                  </span>
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2 uppercase">DONT's</h4>
            <ul className="flex flex-col gap-1">
              {donts.map((rule, idx) => (
                <li key={idx} className="flex gap-2 text-sm">
                  <span className="w-4 h-4 mt-1">
                    <HiOutlineXMark size={16} strokeWidth={1} />
                  </span>
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default RulesModal;
