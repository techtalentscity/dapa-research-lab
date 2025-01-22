import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <nav className="relative z-20 mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-6">
        {/* Logo */}
        <Link to={"/"} className="flex items-center">
          <img src={logo} alt="Favored Online Inc Logo" className="w-40" />
        </Link>

        {/* Desktop Menu */}
        <div className="space-x-4 hidden md:block">
          <button className="text-sm bg-[#81bb36] text-white px-6 py-2 rounded-lg hover:bg-[#6aa92b] transition-colors duration-200">
            <Link to={"/"} className="font-medium text-white uppercase text-sm">
              Home
            </Link>
          </button>
          <button className="text-sm bg-gradient-to-r from-[#0F2027] via-[#203A43] to-[#2C5364] text-white px-6 py-2 rounded-lg hover:from-[#152D35] hover:via-[#2C5364] hover:to-[#3A6A7D] transition-colors duration-200">
            <Link to={"/about"} className="font-medium text-white uppercase text-sm">
              About Us
            </Link>
          </button> 
          <button className="text-sm bg-gradient-to-r from-[#1D3557] via-[#457B9D] to-[#A8DADC] text-white px-6 py-2 rounded-lg hover:bg-[#357ABD] transition-colors duration-200">
            <Link to={"/conference"} className="font-medium text-white uppercase text-sm">
              Conference
            </Link>
          </button>
          <button className="text-sm bg-gradient-to-r from-[#F5B700] via-[#F29339] to-[#F25C54] text-white px-6 py-2 rounded-lg hover:from-[#f2a63c] hover:via-[#f07c40] hover:to-[#f05030] transition-colors duration-200">
            <Link to={"/sponsors"} className="font-medium text-white uppercase text-sm">
              Support
            </Link>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden z-40">
          <button onClick={toggleMobileMenu} className="text-white text-2xl">
            {!isMobileMenuOpen && <FiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/80 flex flex-col items-center justify-center z-30">
          <div className="absolute top-4 right-4">
            <button onClick={toggleMobileMenu} className="text-white text-2xl">
              <FiX />
            </button>
          </div>

          <button className="text-sm bg-[#81bb36] text-white px-10 py-2 mb-4 rounded-lg hover:bg-[#6aa92b] transition-colors duration-200">
            <Link to={"/"} className="font-medium text-white uppercase" onClick={toggleMobileMenu}>
              Home
            </Link>
          </button>

          <button className="text-sm bg-gradient-to-r from-[#0F2027] via-[#203A43] to-[#2C5364] text-white px-10 py-2 mb-4 rounded-lg hover:from-[#152D35] hover:via-[#2C5364] hover:to-[#3A6A7D] transition-colors duration-200">
            <Link to={"/about"} className="font-medium text-white uppercase" onClick={toggleMobileMenu}>
              About Us
            </Link>
          </button>

          <button className="text-sm bg-gradient-to-r from-[#1D3557] via-[#457B9D] to-[#A8DADC] text-white px-10 py-2 mb-4 rounded-lg hover:bg-[#357ABD] transition-colors duration-200">
            <Link to={"/conference"} className="font-medium text-white uppercase" onClick={toggleMobileMenu}>
              Conference
            </Link>
          </button>

          <button className="text-sm bg-gradient-to-r from-[#F5B700] via-[#F29339] to-[#F25C54] text-white px-10 py-2 mb-4 rounded-lg hover:from-[#f2a63c] hover:via-[#f07c40] hover:to-[#f05030] transition-colors duration-200">
            <Link to={"/sponsors"} className="font-medium text-white uppercase" onClick={toggleMobileMenu}>
              Support
            </Link>
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
