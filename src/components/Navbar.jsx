import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      {/* <nav className="p-3 bg-teal-500 border-gray-200 dark:bg-gray-900 dark:border-gray-700">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <a href="#" className="flex items-center">
            <i className="bx bxs-component text-white text-[50px] mr-3 h-6 sm:h-10"></i>

            <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
              React Components
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-multi-level"
            type="button"
            className="inline-flex justify-center items-center ml-3 text-gray-400 rounded-lg md:hidden hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-500"
            aria-controls="navbar-multi-level"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            className="hidden w-full md:block md:w-auto "
            id="navbar-multi-level"
          >
            <ul className="flex flex-col p-4 mt-4 rounded-lg border text-white  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <Link
                to="/home"
                className="block py-2 pr-4 pl-3 text-white  rounded md:bg-transparent  md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent"
              >
                Home
              </Link>
              <Link
                to="/page2"
                className="block py-2 pr-4 pl-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                ComponentsII
              </Link>

              <Link
                to="/page3"
                className="block py-2 pr-4 pl-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                ComponentsIII
              </Link>
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Link
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
      <nav className="lg:w-full md:w-full sm:w-full flex items-center justify-between bg-teal-500 p-3 ">
        <div className="text-white ml-24">
          <Link to="/home" className="flex text-center items-center gap-4">
            <i className="bx bxs-component text-[50px]"></i>
            <span className="font-semibold text-xl tracking-tight">
              Custom Components
            </span>
          </Link>
        </div>

        <div className="flex items-center justify-between gap-10 mr-28 text-white lg:flex lg:items-center lg:w-auto">
          <div className="md:flex-grow lg:flex-grow">
            <Link to="/home">ComponentsI</Link>
          </div>
          <div className="md:flex-grow lg:flex-grow">
            <Link to="/page2">ComponentsII</Link>
          </div>
          <div className="lg:flex-grow">
            <Link to="/page3">ComponentIII</Link>
          </div>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
