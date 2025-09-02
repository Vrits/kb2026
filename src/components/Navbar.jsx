import A from "../img/A.png";
import B from "../img/B.png";
import C from "../img/C.png";

const Navbar = ({ children }) => {
  return (
    <>
      <nav className="w-full text-white grid grid-cols-3 items-center px-4 py-2">
        <div className="flex justify-start">
          <img src={A} alt="" className="h-12 sm:h-16 md:h-28 w-auto" />
        </div>
        <div className="flex justify-center">
          <img src={B} alt="" className="h-12 sm:h-16 md:h-28 w-auto" />
        </div>
        <div className="flex justify-end">
          <img src={C} alt="" className="h-12 sm:h-16 md:h-28 w-auto" />
        </div>
      </nav>

      {children}
      <div className="h-12"></div>
    </>
  );
};

export default Navbar;
