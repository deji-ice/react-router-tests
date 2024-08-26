import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ThemeContext from "../contexts/ThemeContext";

export const Error404 = () => {
  const [state, setState] = useState(false);
  const { darkMode } = useContext(ThemeContext);

  return (
    <div
      className={`${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }  h-screen flex items-center pt-5 gap-10 `}
    >
      <h1 className="pl-10">404 Not Found</h1>
      {state && <div className=" px-20 pl-[28rem]" />}
      <button
        className={`${
          darkMode ? "bg-white text-black" : "bg-black text-white"
        } px-3 py-1 rounded-lg font-semibold ml-2`}
      >
        <Link to={"/"}>Go to Home page</Link>
        <img src="" alt="" onLoad={() => setState(true)} />
      </button>
    </div>
  );
};
