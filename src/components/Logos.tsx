import clsx from "clsx";

const Logos = () => {
  const logos = [
    {
      name: "Rezky Febian",
      src: "/assets/logos/rezky-febian.png",
      alt: "resky-febian-logo",
      variant: "medium",
    },
    {
      name: "Mahalini",
      src: "/assets/logos/mahalini.png",
      alt: "mahalini-logo",
      variant: "medium",
    },
    {
      name: "Fiersa Besari",
      src: "/assets/logos/fiersa-besari.png",
      alt: "fiersa-besari-logo",
      variant: "medium",
    },
    {
      name: "Sal Priadi",
      src: "/assets/logos/sal-priadi.png",
      alt: "sal-priadi-logo",
      variant: "medium",
    },
    {
      name: "Nadin Amizah",
      src: "/assets/logos/nadin-amizah.png",
      alt: "nadin-amizah-logo",
      variant: "small",
    },
  ];

  return (
    <section className="w-full flex flex-col items-center justify-center px-8 gap-12">
      <h2 className="uppercase font-bold text-5xl drop-shadow-lg">Lineup</h2>
      <div className="w-[288px] sm:w-[min(320px,100%)] bg-white/50 rounded-xl py-8 flex flex-col items-center gap-6">
        {logos.map((logo) => (
          <div key={logo.name} className="w-full">
            <h3 className="sr-only">{logo.name}</h3>
            <img
              src={logo.src}
              alt={logo.alt}
              className={clsx(
                "mx-auto pointer-events-none",
                { "w-1/2 ": logo.variant === "small" },
                { "w-3/5": logo.variant === "medium" },
                { "w-4/5": logo.variant === "large" }
              )}
            />
          </div>
        ))}
        <span className="text-lg font-semibold text-black">
          And more special guest!
        </span>
      </div>
    </section>
  );
};

export default Logos;
