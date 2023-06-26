import Carousel from "./carousels/Carousel";

const Venue = () => {
  return (
    <section className="w-full flex flex-col items-center gap-8 z-10 my-12">
      <span className="text-lg sm:text-xl lg:text-2xl font-bold tracking-tighter text-center">
        Nah ini guys gambaran venue <br /> Healing De Java
      </span>
      <Carousel />
      <div className="flex flex-col gap-1 items-center">
        <span className="text-lg font-bold italic text-center sm:text-xl lg:text-2xl">
          Udah kebayang gimana serunya?
        </span>
        <span className="w-[min(80%,fit-content)] text-sm tracking-tight text-center sm:text-base lg:text-lg">
          Yuk, sempurnain momen specialmu <br /> bareng orang tersayang!
        </span>
      </div>
    </section>
  );
};

export default Venue;
