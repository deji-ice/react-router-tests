/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import ThemeContext from "../contexts/ThemeContext";
import { MdOutlineLightMode } from "react-icons/md";
import { RiH1, RiMoonClearFill } from "react-icons/ri";
import { HiHome, HiHomeModern } from "react-icons/hi2";
import { AuthContext } from "../contexts/AuthProvider";

const Navbar = () => {
  const { darkMode, setDarkMode, pathname } = useContext(ThemeContext);
  const { user, logout } = useContext(AuthContext);
  const handleClick = () => {
    setDarkMode((prev) => !prev);
  };

  // Check if the pathname is not defined in your routes
  const isWildcardPath =
    pathname !== "/" &&
    pathname !== "/about" &&
    pathname !== "/blog" &&
    pathname !== "/contact" &&
    !pathname.startsWith("/blog/");

  const isAuthPage = pathname === "/register" || pathname === "/login";
  return (
    <nav
      className={` ${
        darkMode ? "text-white" : "text-black"
      } fixed bg-yellow-100/20 top-0 flex w-full font-aeonik_regular justify-between items-center py-3 z-10 px-10 `}
    >
      <ul
        className={`flex justify-between px-5 ${
          darkMode ? "text-white" : "text-black"
        } w-full `}
      >
        <NavLink to="/">
          <HiHome className="text-2xl" />
        </NavLink>

        {!isAuthPage ? (
          <>
            <div className="flex gap-10">
              <li>
                <NavLink to="/about" state={{ deji: true }}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/blog">Blog</NavLink>
              </li>
              <li>
                <NavLink to="/contact?q=ui.dev&src=typed_query&f=live">
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: "/settings",
                    search: "?sort=date",
                    state: { fromHome: true },
                  }}
                >
                  Settings
                </NavLink>
              </li>
            </div>

            <div
              className={`flex  gap-4 ${
                darkMode
                  ? "text-black *:bg-gray-200"
                  : "text-white *:bg-gray-950"
              } *:rounded-md *:px-3 *:py-1 text-sm`}
            >
              {user ? (
                <>
                  <li>
                    <NavLink to={"/login"} onClick={logout}>
                      Logout
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <NavLink to={"/register"}>Register</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/login"}>Login</NavLink>
                  </li>
                </>
              )}
            </div>
          </>
        ) : null}
      </ul>
      <span
        onClick={handleClick}
        className={` ${
          isWildcardPath && darkMode ? "text-white" : "text-black"
        }  hover:cursor-pointer text-2xl mt-1 `}
      >
        {darkMode ? <MdOutlineLightMode /> : <RiMoonClearFill />}
      </span>
    </nav>
  );
};

export default Navbar;
