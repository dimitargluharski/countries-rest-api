import { NavLink, Outlet } from "react-router-dom";

export const DetailsPage = () => {
  return (
    <>
      <nav className="flex gap-x-1 p-2 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <NavLink
          to="details"
          className={({ isActive }) =>
            `${isActive ? "bg-blue-600 text-white" : ``} p-2 rounded`
          }
        >
          Overview
        </NavLink>
        <NavLink
          to="information"
          className={({ isActive }) =>
            `${isActive ? "bg-blue-600 text-white" : ``} p-2 rounded`
          }
        >
          Information
        </NavLink>
        <NavLink
          to="amenities"
          className={({ isActive }) =>
            `${isActive ? "bg-blue-600 text-white" : ``} p-2 rounded`
          }
        >
          Amenities
        </NavLink>
        <NavLink
          to="important"
          className={({ isActive }) =>
            `${isActive ? "bg-blue-600 text-white" : ``} p-2 rounded`
          }
        >
          Important
        </NavLink>
        <NavLink
          to="reviews"
          className={({ isActive }) =>
            `${isActive ? "bg-blue-600 text-white" : ``} p-2 rounded`
          }
        >
          Reviews
        </NavLink>
      </nav>

      <Outlet />
    </>
  );
};
