import ItemsList from "../components/ItemsList";
import SearchBar from "../components/SearchBar";

const CariKodeBelanja = () => {
  return (
    <>
      <main className="container lg:max-w-4xl xl:max-w-6xl 2xl:max-w-screen-2xl mx-auto text-slate-800 min-w-[412px] rounded-lg">
        <div className="mx-auto flex flex-col w-max"></div>
        <section className="shadow-xl rounded-lg">
          <SearchBar />
          <ItemsList />
        </section>
      </main>
    </>
  );
};

export default CariKodeBelanja;
