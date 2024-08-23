/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { Link } from "react-router-dom";
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
      }bg-transparent absolute flex w-full justify-between items-center top-3 z-10 px-10 `}
    >
      <ul
        className={`flex justify-between px-5 ${
          darkMode ? "text-white" : "text-black"
        } w-full text-lg`}
      >
        <Link to="/">
          <HiHome className="text-2xl" />
        </Link>

        {!isAuthPage ? (
          <>
            {/* <li>
              <Link to="/">Home</Link>
            </li> */}
            <li>
              <Link to="/about" state={{ deji: true }}>
                About
              </Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact?q=ui.dev&src=typed_query&f=live">Contact</Link>
            </li>
            <li>
              <Link
                to={{
                  pathname: "/settings",
                  search: "?sort=date",
                  state: { fromHome: true },
                }}
              >
                Settings
              </Link>
            </li>

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
                    <Link to={"/login"} onClick={logout}>Logout</Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to={"/register"}>Register</Link>
                  </li>
                  <li>
                    <Link to={"/login"}>Login</Link>
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
        }  hover:cursor-pointer text-2xl mt-1`}
      >
        {darkMode ? <MdOutlineLightMode /> : <RiMoonClearFill />}
      </span>
    </nav>
  );
};

export default Navbar;
