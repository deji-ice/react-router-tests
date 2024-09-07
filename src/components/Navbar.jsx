/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import ThemeContext from "../contexts/ThemeContext";
import { MdOutlineLightMode } from "react-icons/md";
import { RiH1, RiMoonClearFill } from "react-icons/ri";
import { HiHome, HiHomeModern } from "react-icons/hi2";
import { AuthContext } from "../contexts/AuthProvider";
import { CiUser } from "react-icons/ci";
import { FaRegCircleUser } from "react-icons/fa6";
import { useJwt } from "react-jwt";

const Navbar = () => {
  const { darkMode, setDarkMode, pathname } = useContext(ThemeContext);
  const { user, logout } = useContext(AuthContext);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const handleClick = () => {
    setDarkMode((prev) => !prev);
  };

  // const { decodedToken} = useJwt(user.token);

  // console.log(decodedToken, decodedToken?.userId);

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
                <NavLink to="/gsap">Gsap</NavLink>
              </li>
              <li>
                <NavLink to="/contact?q=ui.dev&src=typed_query&f=live">
                  Contact
                </NavLink>
              </li>
              {/* <li>
                <NavLink
                  to={{
                    pathname: "/settings",
                    search: "?sort=date",
                    state: { fromHome: true },
                  }}
                >
                  Settings
                </NavLink>
              </li> */}
            </div>

            <div className={`flex items-center text-2xl cursor-pointer`}>
              {user ? (
                <li>
                  <FaRegCircleUser
                    onClick={() => setShowUserDropdown((prev) => !prev)}
                  />

                  {showUserDropdown && (
                    <div className="absolute top-12 right-3 bg-white shadow-md rounded-md p-2 z-10">
                      <ul className="text-gray-700 text-sm w-36 flex flex-col gap-2  *:py-1">
                        {/* <li className={`hover:bg-slate-50 duration-200 px-3 py-0.5 rounded-md transition ease-in-out `}>
                          <NavLink to="/profile">Profile</NavLink>
                        </li> */}
                        <li onClick={()=> setShowUserDropdown(false)} className={`hover:bg-slate-50 duration-200 px-3 py-0.5 rounded-md transition ease-in-out `}>
                          <NavLink to="/settings">Account Settings</NavLink>
                        </li>
                        <li className={`hover:bg-slate-50 duration-200 px-3 py-0.5 rounded-md transition ease-in-out `}>
                          <button
                            onClick={() => {
                              logout();
                              setShowUserDropdown(false);
                            }}
                          >
                            Logout
                          </button>
                        </li>
                      </ul>
                    </div>
                  )}
                </li>
              ) : (
                <div
                  className={`flex  gap-4 ${
                    darkMode
                      ? "text-black *:bg-gray-200"
                      : "text-white *:bg-gray-600"
                  } *:rounded-md *:px-3 *:py-1 text-sm`}
                >
                  <li>
                    <NavLink to={"/register"}>Register</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/login"}>Login</NavLink>
                  </li>
                </div>
              )}
            </div>
          </>
        ) : null}
      </ul>
      <span
        onClick={handleClick}
        className={` ${
          isWildcardPath && darkMode ? "text-white" : "text-black"
        }  hover:cursor-pointer text-2xl  `}
      >
        {darkMode ? <MdOutlineLightMode /> : <RiMoonClearFill />}
      </span>
    </nav>
  );
};

export default Navbar;
