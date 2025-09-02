import { useRef } from "react";
import { useBelanja } from "../context/BelanjaContext";

const SearchBar = () => {
  const searchRef = useRef(null);
  const { searchInputHandler } = useBelanja();

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="flex flex-col justify-between sticky top-0 bg-slate-200 rounded-tr-lg rounded-tl-lg min-w-[412px]"
      >
          <div className="w-full flex px-2 py-2">
            <input
              type="search"
              ref={searchRef}
              id="searchbar"
              placeholder="Cari..."
              className="p-2 rounded-md w-full"
            />
            <button
              onClick={() => {
                // const filteredDots = searchRef.current.value.replace(/\./g, "");
                searchInputHandler(searchRef.current.value);
              }}
              className="px-6 py-2 font-bold bg-blue-500 text-slate-200 rounded-md ml-4 hover:bg-blue-600 transition-colors"
            >
              Cari
            </button>
          </div>

      </form>
    </>
  );
};

export default SearchBar;
