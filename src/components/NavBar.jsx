import logo from "../assets/images/transparent.png";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="bg-black border-b-4 top-0 border-lime-500">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-items-start">
            <a className="flex flex-shrink-0 items-center mr-4 cursor-pointer">
              <img className="h-20 w-28" src={logo} />
            </a>

            <div className="md:ml-auto pt-4">
              <div
                className="flex space-x-2 cursor-pointer 
text-transform: uppercase"
              >
                <NavLink
                  to="/"
                  className="text-white hover:bg-lime-500 hover:text-white rounded-md px-3 py-3"
                >
                  Home
                </NavLink>
                <NavLink
                  to="/solution"
                  className="text-white hover:bg-lime-500 hover:text-white rounded-md px-3 py-3"
                >
                  Solution
                </NavLink>
                <NavLink
                  to="/about"
                  className="text-white hover:bg-lime-500 hover:text-white rounded-md px-3 py-3"
                >
                  About Us
                </NavLink>
                <NavLink
                  to="/contact"
                  className="text-white hover:bg-lime-500 hover:text-white rounded-md px-3 py-3"
                >
                  Contact US
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
