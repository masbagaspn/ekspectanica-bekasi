import clsx from "clsx";
import Footer from "./components/Footer";
import Logos from "./components/Logos";
import Prices from "./components/prices/Prices";
import Hero from "./components/Hero";
import { useState } from "react";
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
        "bg-[url('/assets/background-pattern.png')] bg-repeat bg-top-left"
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
        <div className="w-full h-full absolute top-0 left-0 bg-[url('/assets/background-pattern.png')] bg-repeat bg-top-left pointer-events-none z-[1]" />
        <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-b from-[#c42c13] from-5% via-[#e4bf92] via-50% to-[#c42c13] to-100% pointer-events-none opacity-100 z-0"></div>
        <div className="w-full h-screen absolute top-0 left-0 bg-gradient-to-b from-black/70 to-transparent z-0 pointer-events-none"></div>
        <div className="w-full h-[200vh] absolute bottom-0 left-0 bg-gradient-to-t from-black/90 to-transparent z-0 pointer-events-none"></div>
      </div>
    </main>
  );
}

export default App;
