import { useCallback, useState } from "react";
import { AnimatePresence } from "framer-motion";
import RulesModal from "./modals/RulesModal";

const Rules = () => {
  const [isRulesModalOpen, setIsRulesModalOpen] = useState(false);

  const handleClose = useCallback(() => {
    setIsRulesModalOpen(false);
  }, []);

  const rules = {
    do: [
      "Siapkan E-Ticket yang dibeli melalui pihak penyelenggara.",
      "Datang lebih awal untuk penukaran tiket fisik.",
      "Membawa tiket fisik yang telah ditukarkan untuk memasuki venue.",
      "Membawa kartu identitas sebagai antisipasi.",
      "Membawa masker cadangan & hand sanitizer.",
      "Membawa obat-obatan pribadi.",
      "Menggunakan transportasi umum yang telah disarankan.",
      "Posting moment kebersamaan kita selama event berlangsung.",
    ],
    donts: [
      "Dilarang membawa senjata tajam yang membahayakan audience lain.",
      "Dilarang membawa dan menggunakan obat-obatan terlarang.",
      "Dilarang membawa makanan dan minuman dari luar.",
      "Dilarang membawa kamera profesional, tongsis, dan tripod.",
      "Dilarang membawa hewan peliharaan.",
      "Dilarang membawa rokok.",
      "Dilarang membawa rokok elektrik atau Vape.",
      "Dilarang membawa Parfum.",
      "Dilarang membuang sampah sembarangan.",
    ],
  };

  return (
    <div className="w-full flex flex-col items-center gap-8">
      <h2 className="text-2xl font-bold tracking-tight">DO's & DON'Ts</h2>
      <button
        onClick={() => setIsRulesModalOpen(true)}
        className="w-[min(240px,100%)] text-sm font-bold border-2 border-white py-2 uppercase rounded-full hover:bg-white hover:text-black transition"
      >
        Click here
      </button>
      <AnimatePresence>
        {isRulesModalOpen && (
          <RulesModal
            dos={rules.do}
            donts={rules.donts}
            handleClose={handleClose}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Rules;
