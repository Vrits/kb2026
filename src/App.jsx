import { Routes } from "react-router-dom";
import BelanjaProvider from "./context/BelanjaContext";
import CariKodeBelanja from "./pages/CariKodeBelanja";
import { Route } from "react-router-dom";
import CariKodeAsset from "./pages/CariKodeAsset";
import Navbar from "./components/Navbar";
import NotFoundPage from "./pages/NotFoundPage";
import { Navigate } from "react-router-dom";

function App() {
  return (
    <BelanjaProvider>
      <Navbar>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<Navigate to={'/rekening'
          }/>} />
          <Route path="/rekening" element={<CariKodeBelanja />} />
          <Route path="/asset" element={<CariKodeAsset />} />
          <Route path="*" element={<NotFoundPage />} />
          {/* <div className="h-24"></div> */}
        </Routes>
      </Navbar>
    </BelanjaProvider>
  );
}

export default App;
