import clsx from "clsx";

interface HeroProps {
  onLoad: () => void;
}

const Hero: React.FC<HeroProps> = ({ onLoad }) => {
  return (
    <section className="w-full min-h-screen flex flex-col gap-12 items-center justify-center">
      <header className="w-fit h-[5vh] lg:h-[10vh] flex items-center gap-4 z-[1]">
        <span className="uppercase font-medium font-daysone items-center text-[6px] sm:text-[8px] md:text-[10px] italic">
          POWERED BY
        </span>
        <img
          src="/assets/bozz-logo.png"
          alt="bozz-logo"
          className="h-full w-auto"
        />
      </header>
      <h1
        className={clsx(
          "flex flex-col text-center font-black tracking-tight font-daysone z-10 uppercase",
          "text-4xl sm:text-5xl md:text-6xl lg:text-7xl",
          "mt-8 mb-4 sm:mt-12 sm:mb-8 lg:mt-16 lg:mb-12"
        )}
      >
        Selaras
        <span className="text-4xl stroke-2 stroke-black inline-flex gap-2">
          Melodi<span className="text-7xl">&</span>
          <span className="self-end">Harmoni</span>
        </span>
      </h1>
      <img
        src="/assets/section-lineup.png"
        alt="lineup"
        className="w-full h-auto z-10 -translate-y-32"
        onLoad={onLoad}
      />
    </section>
  );
};

export default Hero;
