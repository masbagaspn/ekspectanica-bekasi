import Price from "./Price";

const Prices = () => {
  const tickets = [
    {
      name: "Festival",
      price: "150K",
      variant: "orange",
    },
    {
      name: "VIP",
      price: "250K",
      variant: "turqoise",
    },
  ];
  return (
    <section className="w-full my-10 flex flex-col gap-12 items-center z-10">
      <h2 className="uppercase font-bold text-5xl drop-shadow-lg">Tickets</h2>
      <div className="flex flex-col gap-4 lg:flex-row lg:gap-8">
        {tickets.map((ticket) => (
          <Price
            key={ticket.name}
            name={ticket.name}
            price={ticket.price}
            variant={ticket.variant}
          />
        ))}
      </div>
    </section>
  );
};

export default Prices;
