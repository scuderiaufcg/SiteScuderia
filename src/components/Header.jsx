import { NavLink, useLocation } from "react-router-dom";

export default function Header() {

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-center items-center">
        <nav className="space-x-8 flex">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-xl pb-1 border-b-2 ${
                isActive ? "text-blue-600 border-blue-600" : "text-gray-700 hover:text-blue-600 border-transparent"
              }`
            }
          >
            Início
          </NavLink>
          <NavLink
            to="/sobre"
            className={({ isActive }) =>
              `text-xl pb-1 border-b-2 ${
                isActive ? "text-blue-600 border-blue-600" : "text-gray-700 hover:text-blue-600 border-transparent"
              }`
            }
          >
            Sobre
          </NavLink>
          <NavLink
            to="/contato"
            className={({ isActive }) =>
              `text-xl pb-1 border-b-2 ${
                isActive ? "text-blue-600 border-blue-600" : "text-gray-700 hover:text-blue-600 border-transparent"
              }`
            }
          >
            Contato
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
