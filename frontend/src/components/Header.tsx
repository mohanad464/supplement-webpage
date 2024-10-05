import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo122345.png";

const Header = () => {
  return (
    <header className="bg-primary">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8 ">
        <Link to="/" className="mb-3">
          <img src={Logo} alt="logo" width={100} height={100} />
        </Link>

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm text-white">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `transition ${
                      isActive ? "text-yellow-500" : ""
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/accessories"
                  className={({ isActive }) =>
                    `transition ${
                      isActive ? "text-yellow-500" : ""
                    }`
                  }
                >
                  Accesories
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/vitamins"
                  className={({ isActive }) =>
                    `transition ${
                      isActive ? "text-yellow-500" : ""
                    }`
                  }
                >
                  Vitamin & Health
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/protein"
                  className={({ isActive }) =>
                    `transition ${
                      isActive ? "text-yellow-500" : ""
                    }`
                  }
                >
                  Protein
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/protein"
                  className={({ isActive }) =>
                    `transition text-yellow-500 ${
                      isActive ? "text-yellow-500" : ""
                    }`
                  }
                >
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <Link
                to="/cart"
                className="block rounded-md px-5 py-2.5 text-sm bg-cart font-medium transition hover:bg-secondary"
              >
                🛒
              </Link>

              <Link
                to="/login"
                className="block rounded-md border px-5 py-2.5 text-sm font-medium text-white transition hover:bg-secondary"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-primary transition hover:text-secondary sm:block"
              >
                Register
              </Link>
            </div>

            <button className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
