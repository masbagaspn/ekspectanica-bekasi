import Link from "./links/Link";

const Cities = () => {
  const cities = [
    {
      name: "surabaya",
      href: "https://healingdejavasurabaya.bossevent.id",
    },
    {
      name: "semarang",
      href: "https://healingdejavasemarang.bossevent.id",
    },
    {
      name: "jogjakarta",
      href: "https://healingdejavajogjakarta.bossevent.id",
    },
    {
      name: "bekasi",
      href: "https://healingdejavabekasi.bossevent.id",
    },
    {
      name: "bandung",
      href: "https://healingdejavabandung.bossevent.id",
    },
  ];

  return (
    <div className="w-full h-fit flex flex-col items-center gap-8">
      <h3 className="text-2xl font-bold tracking-tight">Kota Lainnya</h3>
      <div className="w-4/5 flex flex-wrap items-center justify-center gap-3 sm:gap-5 md:gap-8">
        {cities.map((city) => (
          <Link key={city.name} href={city.href}>
            {city.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Cities;
