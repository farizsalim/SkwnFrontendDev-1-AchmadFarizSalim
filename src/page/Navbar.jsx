import { useState } from "react";
import { Link } from "react-router-dom";
import { Logo, Shop } from "../assets/assets";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-6 md:px-[80px] py-4 flex justify-between items-center h-[100px] relative">
      <div className="text-2xl font-bold text-orange-900">
        <img src={Logo} alt="logo" className="md:h-[50px] h-[30px]" />
      </div>
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="focus:outline-none"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h8   M4 12h16   M4 18h12"
              />
            )}
          </svg>
        </button>
      </div>
      <ul
        className={`${
          isOpen ? "block" : "hidden"
        } absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none md:flex space-y-4 md:space-y-0 md:space-x-6 text-[15px] text-center md:text-left px-6 md:px-0 py-4 md:py-0 z-10`}
      >
        <li><Link to="/">About Us</Link></li>
        <li><Link to="/">Furniture</Link></li>
        <li><Link to="/">Partnerships</Link></li>
        <li><Link to="/">Contact</Link></li>
      </ul>
      <div className="hidden md:flex">
        <button className="bg-[#E5F0B6] p-3 rounded mr-2 h-[50px]">Sign Up</button>
        <img src={Shop} alt="icon_shop" className="p-3 bg-[#553B33] h-[50px] rounded" />
      </div>
    </nav>
  );
};

export default Navbar;
