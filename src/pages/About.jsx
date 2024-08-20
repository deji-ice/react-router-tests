import { Outlet, useLocation, useNavigate } from "react-router-dom";

const About = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("register");
    };
    const location = useLocation();

    console.log(location);
  return (
    <div className="h-screen bg-yellow-300 pt-20">
      <Outlet />
      <h1 className="pl-10">About</h1>
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
        <button onClick={handleClick} className="bg-white self-end rounded-lg px-3 py-1 mt-2 font-semibold">register</button>
      </div>
    </div>
  );
};

export default About;
