import ItemsList from "../components/ItemsList";
import SearchBar from "../components/SearchBar";

const CariKodeBelanja = () => {
  return (
    <>
      <main className="container lg:max-w-4xl xl:max-w-6xl 2xl:max-w-screen-2xl mx-auto text-slate-800 min-w-[412px] rounded-lg">
        <div className="mx-auto flex flex-col w-max">
          {/* <h1 className="font-bold text-4xl mt-8 ubuntu-bold drop-shadow-lg text-sky-900 py-2">
            REKENING PEDIA
          </h1> */}
        </div>
        <section className="shadow-xl rounded-lg">
          <SearchBar
            kodeMinW={"sm:min-w-[8.5rem]"}
            flexSize={[1, 3, 6, 3]}
            tabTitle={[
              "Kode Akun",
              "Uraian Akun",
              "Deskripsi",
              "Contoh / Ketentuan",
            ]}
          />
          <ItemsList />
        </section>
      </main>
    </>
  );
};

export default CariKodeBelanja;
