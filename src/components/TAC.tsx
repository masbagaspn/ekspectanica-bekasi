import Cities from "./Cities";
import Rules from "./Rules";

const TAC = () => {
  return (
    <section className="w-full flex flex-col gap-16 my-12 px-8 z-10">
      <Rules />
      <Cities />
    </section>
  );
};

export default TAC;
