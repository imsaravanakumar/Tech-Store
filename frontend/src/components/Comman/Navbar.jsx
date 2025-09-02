import React, { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { CgProfile, CgShoppingCart } from "react-icons/cg";
import Searchbar from "./Searchbar";
import CartDrawer from "../Layout/CartDrawer";
import { useCart } from "../Cart/CartProvider";
import ProductDetails from "../Products/ProductDetails";
import { BiUser } from "react-icons/bi";
import { FaSignOutAlt } from "react-icons/fa";

const Navbar = ({ token, setToken }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const { getCartCount } = useCart();

  const ocDrawer = () => setDrawerOpen(!drawerOpen);
  const toggleMobileNav = () => setMobileNavOpen(!mobileNavOpen);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setToken(null);
    navigate("/login");
  };

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Navbar */}
      <nav className="w-full flex items-center justify-between px-6 py-3
        bg-gradient-to-r from-gray-900 via-gray-800 to-black
        text-white shadow-md top-0 left-0 z-50 backdrop-blur-md">
        
        {/* Logo */}
        <Link to="/" className="text-2xl md:text-3xl font-extrabold tracking-tight">
          Tech<span className="text-amber-400">Store</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-10">
          {["/", "/phones", "/laptops", "/watches"].map((path, i) => (
            <Link
              key={i}
              to={path}
              className={`uppercase text-sm font-semibold relative transition-all
                ${isActive(path) ? "text-amber-400" : "text-gray-300 hover:text-white"}`}
            >
              {path === "/" ? "Home" : path.replace("/", "")}
              {isActive(path) && (
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-amber-400 rounded-full"></span>
              )}
            </Link>
          ))}
        </div>

        {/* Right icons */}
        <div className="flex items-center space-x-5">
          {/* Cart */}
          <button onClick={ocDrawer} className="relative p-1 rounded hover:bg-gray-800 transition">
            <CgShoppingCart className="h-7 w-7 text-amber-400" />
            {getCartCount() > 0 && (
              <span className="absolute -top-2 -right-2 bg-amber-400 text-black font-bold text-xs rounded-full px-2 py-0.5 shadow">
                {getCartCount()}
              </span>
            )}
          </button>

          <div>
            <Searchbar
              products={[
                ...ProductDetails.Phones,
                ...ProductDetails.Laptops,
                ...ProductDetails.Watches,
              ]}
            />
          </div>

          {/* Auth Buttons */}
          {token ? (
            <>
              <Link to="/profile" className="hidden md:block p-1 rounded hover:bg-gray-800 transition">
                <CgProfile className="h-7 w-7 text-gray-300 hover:text-amber-400" />
              </Link>
              <button
                onClick={logout}
                className="hidden md:flex items-center gap-2 py-2 px-4 bg-red-600 hover:bg-red-700 rounded-full text-sm font-semibold transition"
              >
                <FaSignOutAlt /> Logout
              </button>
            </>
          ) : (
            <div className="hidden md:flex space-x-2">
              <Link to="/login" className="flex items-center gap-2 px-4 py-2 bg-amber-400 hover:bg-amber-500 rounded-full text-black font-semibold transition">
                <BiUser /> Login
              </Link>
            </div>
          )}

          {/* Mobile menu toggle */}
          <button onClick={toggleMobileNav} className="md:hidden hover:scale-110 transition">
            {mobileNavOpen ? (
              <FaXmark className="h-7 w-7 text-amber-400" />
            ) : (
              <FaBars className="h-7 w-7 text-gray-300" />
            )}
          </button>
        </div>
      </nav>

      {/* Cart Drawer */}
      <CartDrawer drawerOpen={drawerOpen} ocDrawer={ocDrawer} />

      {/* Mobile Nav */}
      <div
        className={`fixed flex flex-col md:hidden top-0 left-0 h-full w-4/5 sm:w-1/2
          bg-gray-900 text-white shadow-lg transform transition-transform duration-300 z-40
          ${mobileNavOpen ? "translate-x-0" : "-translate-x-full"} backdrop-blur-md`}
      >
        <div className="flex flex-col space-y-4 mt-16 ">
          {["/", "/phones", "/laptops", "/watches"].map((path, i) => (
            <Link
              key={i}
              to={path}
              onClick={toggleMobileNav}
              className={`uppercase py-3 ps-4 text-lg font-semibold rounded hover:bg-gray-800 transition
                ${isActive(path) ? "text-amber-400 bg-gray-800" : "text-gray-300"}`}
            >
              {path === "/" ? "Home" : path.replace("/", "")}
            </Link>
          ))}
        </div>

        <div className="mt-auto p-6 border-t border-gray-700">
          {token ? (
            <button
              onClick={() => {
                logout();
                toggleMobileNav();
              }}
              className="w-full py-3 bg-red-600 hover:bg-red-700 rounded-full font-semibold transition"
            >
              Logout
            </button>
          ) : (
            <div className="flex flex-col space-y-3">
              <Link
                to="/login"
                onClick={toggleMobileNav}
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-center font-semibold transition"
              >
                Login
              </Link>
              <Link
                to="/signup"
                onClick={toggleMobileNav}
                className="w-full py-3 bg-amber-400 hover:bg-amber-500 text-black font-bold rounded-full text-center transition"
              >
                Signup
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
