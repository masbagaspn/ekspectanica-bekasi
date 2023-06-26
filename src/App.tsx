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
        "bg-[url('/assets/background.png')] bg-no-repeat bg-cover bg-top-left"
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
        <div className="w-full h-screen absolute top-0 left-0 bg-gradient-to-b from-black/70 to-transparent z-0"></div>
        <div className="w-full h-[200vh] absolute bottom-0 left-0 bg-gradient-to-t from-black/90 to-transparent z-0"></div>
      </div>
    </main>
  );
}

export default App;
