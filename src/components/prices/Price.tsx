import clsx from "clsx";

interface PriceProps {
  name: string;
  price: string;
  variant: string;
}

const Price: React.FC<PriceProps> = ({ name, price, variant }) => {
  return (
    <div className="w-72 sm:w-80 h-full relative drop-shadow-lg">
      <img
        src="/assets/images/ticket.png"
        alt="ticket"
        className="w-full h-auto object-center"
      />
      <div className="w-full h-full absolute top-0 left-0 grid grid-cols-10 grid-rows-12 text-black">
        <div
          className={clsx(
            "w-full h-full bg-white row-start-2 col-start-2 col-span-8 row-span-3 rounded-tl-lg rounded-tr-lg",
            "pt-6 flex flex-col items-center justify-between pointer-events-none"
          )}
        >
          <h4
            className={clsx(
              "text-5xl font-bold tracking-tight sm:text-[3.25rem]",
              { "text-turqoise": variant === "turqoise" },
              { "text-orange": variant === "orange" }
            )}
          >
            {name}
          </h4>
          <span className="uppercase text-[8px] font-medium sm:text-[10px]">
            one day pass
          </span>
        </div>
        <div className="w-full h-full row-start-5 col-start-2 col-span-8 row-span-1">
          <PriceDivider />
        </div>
        <div
          className={clsx(
            "w-full h-full bg-white col-start-2 col-span-8 row-start-6 row-span-6 rounded-bl-lg rounded-br-lg",
            "flex flex-col items-center justify-between p-6"
          )}
        >
          <span className="uppercase font-medium tracking-wider text-xs sm:text-sm pointer-events-none">
            start from
          </span>
          <p className="text-6xl font-bold inline-flex sm:text-[4.25rem] pointer-events-none">
            <span className="text-xs mt-1 sm:text-sm sm:mt-2">IDR</span>
            {price}
          </p>
          <a
            href="https://yesplis.com/event/ekspectanica-2023-healing-de-java-bekasi"
            target="_blank"
            className={clsx(
              "w-full bg-black text-white text-center rounded-full py-1.5 font-bold uppercase sm:text-lg lg:text-xl transition",
              {
                "bg-turqoise border border-turqoise hover:text-turqoise hover:bg-white":
                  variant === "turqoise",
              },
              {
                "bg-orange border border-orange hover:text-orange hover:bg-white":
                  variant === "orange",
              }
            )}
          >
            Buy Ticket
          </a>
        </div>
      </div>
    </div>
  );
};

const PriceDivider = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 358.4 58.67"
      className="w-full h-full"
    >
      <polygon
        points="358.4 58.67 0 58.67 44.8 29.33 0 0 358.4 0 313.6 29.33 358.4 58.67"
        fill="#fff"
      />
      <line
        x1="57.8"
        y1="29.33"
        x2="67.8"
        y2="29.33"
        fill="none"
        stroke="#b3b3b3"
        strokeLinecap="round"
        strokeMiterlimit="10"
      />
      <line
        x1="78.96"
        y1="29.33"
        x2="88.96"
        y2="29.33"
        fill="none"
        stroke="#b3b3b3"
        strokeMiterlimit="10"
      />
      <line
        x1="100.13"
        y1="29.33"
        x2="110.13"
        y2="29.33"
        fill="none"
        stroke="#b3b3b3"
        strokeMiterlimit="10"
      />
      <line
        x1="121.29"
        y1="29.33"
        x2="131.29"
        y2="29.33"
        fill="none"
        stroke="#b3b3b3"
        strokeMiterlimit="10"
      />
      <line
        x1="142.45"
        y1="29.33"
        x2="152.45"
        y2="29.33"
        fill="none"
        stroke="#b3b3b3"
        strokeMiterlimit="10"
      />
      <line
        x1="163.62"
        y1="29.33"
        x2="173.62"
        y2="29.33"
        fill="none"
        stroke="#b3b3b3"
        strokeMiterlimit="10"
      />
      <line
        x1="184.78"
        y1="29.33"
        x2="194.78"
        y2="29.33"
        fill="none"
        stroke="#b3b3b3"
        strokeMiterlimit="10"
      />
      <line
        x1="205.95"
        y1="29.33"
        x2="215.95"
        y2="29.33"
        fill="none"
        stroke="#b3b3b3"
        strokeMiterlimit="10"
      />
      <line
        x1="227.11"
        y1="29.33"
        x2="237.11"
        y2="29.33"
        fill="none"
        stroke="#b3b3b3"
        strokeMiterlimit="10"
      />
      <line
        x1="248.27"
        y1="29.33"
        x2="258.27"
        y2="29.33"
        fill="none"
        stroke="#b3b3b3"
        strokeMiterlimit="10"
      />
      <line
        x1="269.44"
        y1="29.33"
        x2="279.44"
        y2="29.33"
        fill="none"
        stroke="#b3b3b3"
        strokeMiterlimit="10"
      />
      <line
        x1="290.6"
        y1="29.33"
        x2="300.6"
        y2="29.33"
        fill="none"
        stroke="#b3b3b3"
        strokeMiterlimit="10"
      />
    </svg>
  );
};

export default Price;
