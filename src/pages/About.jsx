import { Outlet, useNavigate } from "react-router-dom";
import ThemeContext from "../contexts/ThemeContext";
import { useContext } from "react";

const About = () => {
  const { darkMode } = useContext(ThemeContext);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("register");
  };
  return (
    <div
      className={`${
        darkMode ? "bg-indigo-600" : "bg-yellow-300"
      } h-screen  pt-20`}
    >
      <Outlet />
      <h1 className="pl-10 underline text-red-500 decoration-black underline-offset-2">
        About
      </h1>
      <div className=" px-20 pl-[28rem]">
        <p className="pr-5 leading-relaxed text-lg">
          <b>Lorem ipsum</b> dolor sit amet, consectetur adipisicing elit.{" "}
          <b>Animi</b> ipsa cupiditate excepturi tempore quo quae repellendus
          nam modi, id fugit molestiae numquam velit commodi porro voluptas
          exercitationem in nobis error quia quas similique voluptatibus.
          <br /> Voluptatem dolore officia nulla ut aut. Lorem ipsum dolor sit
          amet consectetur, adipisicing elit. Sequi aperiam veniam voluptatibus
          ea. <b>Blanditiis ex quasi est, id eos odio!</b>
        </p>
        <button
          onClick={handleClick}
          className="bg-white self-end rounded-lg px-3 py-1 mt-2 font-semibold"
        >
          register
        </button>
      </div>
    </div>
  );
};

export default About;
