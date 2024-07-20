import TecGroup from "../../components/TecGroup";

function Technologies() {
  return (
    <section className="bg-custom-gradient w-full h-20 flex items-center">
      <div className="h-[4.6rem] dark:bg-neutral-900 bg-slate-50 flex gap-5 overflow-hidden">
        <TecGroup/>
        <TecGroup/>
        <TecGroup/>
        <TecGroup/>
      </div>
    </section>
  );
}

export default Technologies;
