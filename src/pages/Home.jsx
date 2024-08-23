import { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";

const Home = () => {
  
  const { darkMode } = useContext(ThemeContext);
  return (
    <div
      className={`${
        darkMode ? "bg-slate-700 text-white" : "bg-slate-100 text-black"
      } h-screen pt-20 font-aeonik_regular`}
    >
      <h1 className="pl-10 text-purple-700 underline decoration-white underline-offset-2">
        Home
      </h1>
      <div className=" px-20 pl-[28rem]">
        <p className="pr-5 leading-relaxed text-lg">
          <b>Lorem ipsum</b> dolor sit amet, co`nsectetur adipisicing elit.{" "}
          <b>Animi</b> ipsa cupiditate excepturi tempore quo quae repellendus
          nam modi, id fugit molestiae numquam velit commodi porro voluptas
          exercitationem in nobis error quia quas similique voluptatibus.
          <br /> Voluptatem dolore officia nulla ut aut. Lorem ipsum dolor sit
          amet consectetur, adipisicing elit. Sequi aperiam veniam voluptatibus
          ea. <b>Blanditiis ex quasi est, id eos odio!</b>
        </p>
      </div>
    </div>
  );
};

export default Home;
