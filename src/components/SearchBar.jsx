import { useRef } from "react";
import { useBelanja } from "../context/BelanjaContext";
import { Link, useLocation } from "react-router-dom";

const SearchBar = () => {
  const searchRef = useRef(null);
  const { searchInputHandler } = useBelanja();
  const location = useLocation();

  const getButtonClass = (path) => {
    const isActive = location.pathname === path;
    return `px-4 py-2 text-sm font-semibold transition-colors ${
      isActive ? "text-blue-600 border-b-2 border-blue-600" : "text-slate-500 hover:text-slate-800"
    }`;
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        searchInputHandler(searchRef.current.value);
      }}
      className="sticky top-0 bg-slate-100 rounded-tr-lg rounded-tl-lg min-w-[412px] shadow-sm z-10"
    >
      {/* Container Navigasi */}
      <div className="flex justify-center gap-6 pt-3 pb-1 border-b border-slate-200">
        <Link to="/rekening" className={getButtonClass("/rekening")}>Rekening</Link>
        <Link to="/pendapatan" className={getButtonClass("/pendapatan")}>Pendapatan</Link>
        <Link to="/pembiayaan" className={getButtonClass("/pembiayaan")}>Pembiayaan</Link>
      </div>

      {/* Container Input Search */}
      <div className="w-full flex px-4 py-3">
        <input
          type="search"
          ref={searchRef}
          id="searchbar"
          placeholder="Cari..."
          className="p-2 border border-slate-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="px-6 py-2 font-bold bg-blue-500 text-white rounded-md ml-4 hover:bg-blue-600 transition-colors"
        >
          Cari
        </button>
      </div>
    </form>
  );
};

export default SearchBar;