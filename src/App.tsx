import clsx from "clsx";
import { useState } from "react";

import Footer from "./components/Footer";
import Logos from "./components/Logos";
import Prices from "./components/prices/Prices";
import Hero from "./components/Hero";
import Venue from "./components/Venue";
import Info from "./components/Info";
import TAC from "./components/TAC";

function App() {
  const [loading, setLoading] = useState(true);
  const [animate, setAnimate] = useState(false);

  return (
    <main
      className={clsx(
        "max-w-screen w-full min-h-screen text-white font-monstserrat gap-10 py-6 relative",
      )}
    >
      <div
        className={clsx(
          "w-full h-full flex flex-col justify-center items-center transition-opacity duration-500 opacity-0",
          { "hidden ": loading === true },
          { "visible ": loading === false },
          { "opacity-100 ": animate === true }
        )}
      >
        <Hero
          onLoad={() => {
            setLoading(false);
            setTimeout(() => {
              setAnimate(true);
            }, 20);
          }}
        />
        <Info />
        <Logos />
        <Prices />
        <Venue />
        <TAC />
        <Footer />
        <div className="fixed top-0 left-0 w-screen h-screen z-[1] opacity-10">
          <img src="/assets/pattern-bekasi-01.png" className="w-full h-full object-cover object-left" />
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-20% from-[#c42c13] via-50% via-[#e4bc92] to-100% to-[#c42c13] z-0"/>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/70 via-50% via-transparent to-black/70 z-[1]"/>
        {/* <div className="fixed top-0 left-0 z-0 w-screen h-screen">
          <img
            src="/assets/background-bekasi.png"
            className="w-full h-full object-cover object-center"
          />
        </div> */}
      </div>
    </main>
  );
}

export default App;
