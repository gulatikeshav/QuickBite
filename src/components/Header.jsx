import React, { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { IoCartSharp, IoClose } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom"; 
import { useSelector } from "react-redux";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const toggleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogin = () => {
    setIsLogin(!isLogin);
  };

  const items = useSelector((state) => state.cart.items);
  const totalItemCount = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="flex items-center justify-between rounded-md px-2 w-full shadow-lg bg-white fixed top-0 z-10">
      <div className="md:w-2/12">
        <NavLink to="/">
          <img
            src={LOGO_URL}
            alt="logo"
            className="size-16 md:size-20 md:w-auto rounded-full"
          />
        </NavLink>
      </div>

      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } flex flex-col items-center justify-center w-full gap-6 fixed top-16 left-0 md:flex md:flex-row md:static md:justify-end px-4 py-2 bg-white z-2 border-t-2 border-gray-100 md:border-none`}
      >
        <nav>
          <ul className="flex flex-col md:flex-row items-center gap-5 md:text-xl lg:text-2xl">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-red-500 border-b-2 border-red-500 font-semibold transition duration-300 ease-in-out"
                    : " hover:border-b-2 hover:border-red-400 transition duration-300 ease-in-out"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-red-500 border-b-2 border-red-500 font-semibold transition duration-300 ease-in-out"
                    : " hover:border-b-2 hover:border-red-400 transition duration-300 ease-in-out"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "text-red-500 border-b-2 border-red-500 font-semibold transition duration-300 ease-in-out"
                    : " hover:border-b-2 hover:border-red-400 transition duration-300 ease-in-out"
                }
              >
                Contact Us
              </NavLink>
            </li>

            <li className="relative">
              <NavLink
                to="/cart"
                className={({ isActive }) =>
                  isActive
                    ? "text-red-500 border-b-2 border-red-500 font-semibold transition duration-300 ease-in-out"
                    : " "
                }
              >
                <IoCartSharp
                  size={32}
                  className=" hover:border-b-2 hover:border-red-400  transition duration-300 ease-in-out"
                />
                {totalItemCount > 0 && (
                  <span className="absolute bottom-6 right-0 text-center bg-red-300 rounded-full w-5 animate-bounce text-sm">
                    {totalItemCount}
                  </span>
                )}
              </NavLink>
            </li>
          </ul>
        </nav>
        <button
          onClick={handleLogin}
          className="md:text-xl lg:text-2xl w-24 bg-red-500 hover:bg-red-600 text-white p-2 border rounded-lg"
        >
          {isLogin ? "Logout" : "Login"}
        </button>
      </div>

      <button onClick={toggleMenuOpen} className="md:hidden">
        {isMenuOpen ? <IoClose /> : <FaBars />}
      </button>
    </header>
  );
};

export default Header;
