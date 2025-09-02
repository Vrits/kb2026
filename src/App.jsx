import { Routes } from "react-router-dom";
import BelanjaProvider from "./context/BelanjaContext";
import CariKodeBelanja from "./pages/CariKodeBelanja";
import { Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import NotFoundPage from "./pages/NotFoundPage";
import { Navigate } from "react-router-dom";

function App() {
  return (
    <BelanjaProvider>
      <Navbar>
        <Routes>
          <Route path="/" element={<Navigate to={"/rekening"} />} />
          <Route path="/rekening" element={<CariKodeBelanja />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Navbar>
    </BelanjaProvider>
  );
}

export default App;
