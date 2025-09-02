import  { createContext, useContext, useState } from "react";

const BelanjaContext = createContext({
  searchInput: "",
  searchInputHandler: () => {},
  startIndex: 0,
  endIndex: 20,
  handleNextPage: () => {},
  handlePreviousPage: () => {},
  handlePageNumber: () => {},
  itemsPerPage: 20,
  handleItemsPerPage: () => {},
});

const BelanjaProvider = ({ children }) => {
  const [searchInput, setSearchInput] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(20);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };
  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };
  const handlePageNumber = (pageNumber) => {
    setCurrentPage(() => pageNumber);
  };

  const searchInputHandler = (input) => {
    setSearchInput(input);
    setCurrentPage(() => 1);
  };

  const handleItemsPerPage = (e) => {
    setItemsPerPage((item) => Number(e));
  };

  return (
    <BelanjaContext.Provider
      value={{
        searchInput,
        searchInputHandler,
        startIndex,
        endIndex,
        handleNextPage,
        handlePreviousPage,
        handlePageNumber,
        currentPage,
        itemsPerPage,
        handleItemsPerPage
      }}
    >
      {children}
    </BelanjaContext.Provider>
  );
};

export const useBelanja = () => {
  const context = useContext(BelanjaContext);
  if (!context) {
    throw new Error("useBelanja must be used within a BelanjaProvider");
  }
  return context;
};

export default BelanjaProvider;
