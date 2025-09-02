import A from "../img/A.png";
import B from "../img/B.png";
import C from "../img/C.png";

const Navbar = ({ children }) => {
  return (
    <>
      <nav className="w-full text-white flex items-center justify-between px-4 py-2">
        <img src={A} alt="" className="h-28 w-auto"/>
        <img src={B} alt="" className="h-28 w-auto"/>  
        <img src={C} alt="" className="h-28 w-auto"/>
      </nav>
      {children}
      <div className="h-12"></div>
    </>
  );
};

export default Navbar;
