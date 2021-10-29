import { NavLink } from "react-router-dom";

export function NavItem({ to, children }) {
  return (
    <NavLink
      end
      to={to}
      className={({ isActive }) =>
        `${
          isActive
            ? "bg-gray-800 text-white shadow-inset"
            : "text-gray-200 hover:bg-gray-500 hover:text-gray-100 bg-gray-600"
        } block px-4 py-2 rounded-md`
      }
    >
      {children}
    </NavLink>
  );
}
