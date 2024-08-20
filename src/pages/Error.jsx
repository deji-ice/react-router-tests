import { useState } from "react";
import { Link } from "react-router-dom";

export const Error404 = () => {
  const [state, setState] = useState(false);
  return (
    <div className="bg-black h-screen flex items-center pt-5 text-white">
      <h1 className="pl-10">404 Not Found</h1>
      {state && <div className=" px-20 pl-[28rem]" />}
      <button className="bg-white text-black px-3 py-1 rounded-lg font-semibold ml-2">
        <Link to={"/"}>Go to Home page</Link>
        <img src="" alt="" onLoad={() => setState(true)} />
      </button>
    </div>
  );
};
