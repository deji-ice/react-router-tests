import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import ThemeContext from "../contexts/ThemeContext";
import { MdOutlineLightMode } from "react-icons/md";
import { RiMoonClearFill } from "react-icons/ri";

const Navbar = () => {
  const { darkMode, setDarkMode, pathname } = useContext(ThemeContext);
  // const { location: pathname } = useLocation();

  const handleClick = () => {
    setDarkMode(!darkMode);
    console.log(darkMode);
    console.log(pathname);
  };

  return (
    <nav
      className={`  " bg-transparent absolute flex w-full justify-between items-center top-3 z-10 px-10 `}
    >
      <ul className="flex justify-around w-full text-2xl">
        <li>
          <Link to="/">Home</Link>
        </li>
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
      </ul>
      <span
        onClick={handleClick}
        className={` ${
          pathname == "/settings" ? "text-white" : "text-black"
        } text-2xl mt-1`}
      >
        {darkMode ? <RiMoonClearFill /> : <MdOutlineLightMode />}
      </span>
    </nav>
  );
};

export default Navbar;
