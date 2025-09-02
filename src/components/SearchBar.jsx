import { useRef } from "react";
import { useBelanja } from "../context/BelanjaContext";

const SearchBar = ({kodeMinW, flexSize, tabTitle}) => {
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

          {/* <div className="flex text-center border-y-2 mt-4 border-slate-300">
            <h2 className={`font-bold flex-[${flexSize[0]}] text-sm py-2 min-w-32 ${kodeMinW} border-x-2 border-slate-300`}>
              {tabTitle[0]}
            </h2>
            <h2 className={`flex-[${flexSize[1]}] px-2 font-bold text-sm py-2  border-r-2 border-slate-300`}>
            {tabTitle[1]}
            </h2>
            <h2 className={`flex-[${flexSize[2]}] px-2 font-bold text-sm py-2  border-r-2 border-slate-300`}>
            {tabTitle[2]}
            </h2>
            <h2 className={`flex-[${flexSize[3]}] px-2 font-bold text-sm py-2  border-r-2 border-slate-300`}>
            {tabTitle[3]}
            </h2>
          </div> */}
      </form>
    </>
  );
};

export default SearchBar;
