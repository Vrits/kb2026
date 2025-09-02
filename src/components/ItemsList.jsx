import kodeBelanja from "../json/kodeBelanja.json";
import { useBelanja } from "../context/BelanjaContext";
import Pagination from "./Pagination";

const ItemsList = () => {
  const { startIndex, endIndex, searchInput } = useBelanja();

  const filteredKodeBelanja =
    searchInput !== ""
      ? kodeBelanja.filter((item) =>
          Object.values(item).some((value) =>
            `${value}`.toLowerCase().includes(searchInput.toLowerCase())
          )
        )
      : kodeBelanja;

  const currentData = filteredKodeBelanja.slice(startIndex, endIndex);

  const highlightText = (text) => {
    return text.replace(
      new RegExp(searchInput, "gi"),
      (match) => `<span class="highlight">${match}</span>`
    );
  };

  return (
    <div className="bg-slate-200 min-w-[412px] rounded-b-lg p-2">
      {filteredKodeBelanja.length < 1 ? (
        <div className="text-center py-8 text-xl font-bold">
          Tidak ada data yang ditemukan.
        </div>
      ) : (
        <div className="">
          <table className="w-full border-collapse border border-slate-300 text-xs sm:text-sm">
            <thead className="bg-slate-300 shadow">
              <tr>
                <th className="border bg-slate-300 border-slate-400 sticky top-[55px] z-20 p-2">KODE AKUN</th>
                <th className="border bg-slate-300 border-slate-400 sticky top-[55px] z-20 p-2">URAIAN AKUN</th>
                <th className="border bg-slate-300 border-slate-400 sticky top-[55px] z-20 p-2">DESKRIPSI</th>
                <th className="border bg-slate-300 border-slate-400 sticky top-[55px] z-20 p-2">CONTOH / KETENTUAN</th>
              </tr>
            </thead>

            <tbody>
              {currentData.map((e, i) => (
                <tr key={e.KODE + i} className="odd:bg-white even:bg-slate-100">
                  <td
                    className="border border-slate-300 p-2 font-bold"
                    dangerouslySetInnerHTML={{
                      __html: highlightText(`${e.KODE}`),
                    }}
                  />
                  <td
                    className="border border-slate-300 p-2 font-bold md:max-w-44 break-words"
                    dangerouslySetInnerHTML={{
                      __html: highlightText(e.URAIAN),
                    }}
                  />
                  <td
                    className="border border-slate-300 p-2 max-w-48 sm:max-w-64 md:max-w-96 break-words"
                    dangerouslySetInnerHTML={{
                      __html: highlightText(e.DESKRIPSI),
                    }}
                  />
                  <td
                    className="border border-slate-300 p-2 break-words"
                    dangerouslySetInnerHTML={{
                      __html: highlightText(e.KETENTUAN),
                    }}
                  />
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <Pagination totalItems={filteredKodeBelanja.length} />
    </div>
  );
};

export default ItemsList;
