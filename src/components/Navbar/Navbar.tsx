import { Disclosure, DisclosureButton } from "@headlessui/react";
import { NavLink } from "react-router-dom";

import { FaPlus } from "react-icons/fa";

export const Navbar = () => {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex">
            <div className="-ml-2 mr-2 flex items-center md:hidden">
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="absolute -inset-0.5" />
              </DisclosureButton>
            </div>
            <div className="hidden md:flex md:items-center space-x-1 text-white">
              <NavLink
                to="/home"
                className={({ isActive }) =>
                  `${isActive ? "bg-blue-600 text-white" : ``} p-2 rounded`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/catalog"
                className={({ isActive }) =>
                  `${isActive ? "bg-blue-600 text-white" : ``} p-2 rounded`
                }
              >
                Catalog
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `${isActive ? "bg-blue-600 text-white" : ``} p-2 rounded`
                }
              >
                About
              </NavLink>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex-shrink-0 space-x-1 text-white">
              <NavLink
                to="/register-your-place"
                type="button"
                className="relative inline-flex items-center gap-x-1.5 rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                <FaPlus />
                Register your place
              </NavLink>

              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `${isActive ? "bg-blue-600 text-white" : ``} p-2 rounded`
                }
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                className={({ isActive }) =>
                  `${isActive ? "bg-blue-600 text-white" : ``} p-2 rounded`
                }
              >
                Register
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </Disclosure>
  );
};
