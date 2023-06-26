import Button from "./buttons/Button";

const Cities = () => {
  const cities = [
    {
      name: "surabaya",
      href: "",
    },
    {
      name: "semarang",
      href: "",
    },
    {
      name: "jogjakarta",
      href: "",
    },
    {
      name: "bekasi",
      href: "",
    },
    {
      name: "bandung",
      href: "",
    },
  ];

  return (
    <div className="w-full h-fit flex flex-col items-center gap-8">
      <h3 className="text-2xl font-bold tracking-tight">Kota Lainnya</h3>
      <div className="w-4/5 flex flex-wrap items-center justify-center gap-3 sm:gap-5 md:gap-8">
        {cities.map((city) => (
          <Button key={city.name} handleClick={() => {}}>
            {city.name}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Cities;
