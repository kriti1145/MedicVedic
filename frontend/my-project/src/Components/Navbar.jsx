import React, { useEffect, useState } from "react";
import logo from "../assets/Images/logo.png";

function Navbar() {
  /* hook to manage the scroll state*/
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  /*using the list component as a single entity to reuse it */
  const navItems = (
    <>
      <li className="nav-li">
        <a
          className="block px-4 py-2 text-sm lg:text-base font-medium "
          href="/home"
        >
          Home
        </a>
      </li>
      <li className="nav-li">
        <a
          className="block px-4 py-2 text-sm lg:text-base font-medium "
          href="/service"
        >
          Service
        </a>
      </li>
      <li className="nav-li">
        <a
          className="block px-4 py-2 text-sm lg:text-base font-medium "
          href="/findDoctor"
        >
          Find a Doctor
        </a>
      </li>
      <li className="nav-li">
        <a
          className="block px-4 py-2 text-sm lg:text-base font-medium "
          href="/"
        >
          Contact
        </a>
      </li>
    </>
  );
  return (
    <>
      <div
        className={`max-w-screen-2xl container mx-auto md:px-3 px-2 fixed top-0 left-0 right-0 z-50 ${
          sticky
            ? "sticky-navbar shadow-md stick duration-300 transition-all ease-in-out "
            : ""
        }`}
      >
        <div className="navbar flex items-center justify-between">
          <div className="navbar-start flex items-center">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
                aria-label="Toggle menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow rounded-box w-52 bg-gray-200"
              >
                {navItems}
              </ul>
            </div>
            <img src={logo} alt="" className="w-8 h-8 md:w-10 md:h-10" />
            <a
              className={`logo text-lg  lg:text-2xl font-bold cursor-pointer ${
                sticky ? "logo-stick" : ""
              }`}
              href="/home"
            >
              MEDICVEDIC
            </a>
          </div>
          <div className="navbar-end space-x-3">
            <div className="navbar-center hidden lg:flex">
              <ul
                className={`menu menu-horizontal px-1  ${
                  sticky
                    ? "nav-bar-menu-md duration-300 transition-all ease-in-out"
                    : ""
                }`}
              >
                {navItems}
              </ul>
            </div>
            {/*search bar*/}
            <div className="hidden md:block  ">
              <label className="px-3 py-2 rounded-md border border-gray-500 flex items-center gap-2">
                <input
                  type="text"
                  className={`grow outline-none search text-sm md:text-base ${
                    sticky
                      ? "search-bar focus:text-black duration-300 transition-all ease-in-out "
                      : ""
                  }`}
                  placeholder="Search"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 "
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
            </div>
            {/*button*/}
            <div className="hidden md:block">
              <a
                href="/login"
                className={`bg-white px-6 py-2 duration-300 cursor-pointer login ${
                  sticky ? "txt duration-300 transition-all ease-in-out " : ""
                }`}
              >
                Login
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
