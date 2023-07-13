const Info = () => {
  return (
    <section className="w-full flex flex-col items-center gap-2 my-10 z-10">
      <img
        src="/assets/section-info.png"
        alt="info"
        className="w-5/6 h-auto"
        loading="lazy"
      />
      <a
        href="https://yesplis.com/event/ekspectanica-2023-healing-de-java-bekasi"
        target="_blank"
        className="group w-2/3 sm:w-1/3 text-lg font-bold border border-white p-1 uppercase rounded-full my-2 text-center"
      >
        <div className="w-full bg-turqoise rounded-full py-2 group-hover:bg-white group-hover:text-turqoise transition text-xs sm:text-sm md:text-base">
          BUY TICKET
        </div>
      </a>
    </section>
  );
};

export default Info;
