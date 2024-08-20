import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="absolute w-full top-3 ">
      <ul className="flex justify-around text-2xl">
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
    </nav>
  );
};

export default Navbar;
