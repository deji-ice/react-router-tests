import { useSearchParams } from "react-router-dom";

const Contact = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get("q");
  const src = searchParams.get("src");
  const f = searchParams.get("f");

  console.log(q, src, f);
  return (
    <div className="h-screen bg-yellow-500 pt-20">
      <h1 className="pl-10">Contact</h1>
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
          onClick={() => setSearchParams("?q=deji&src=typed_query&f=false")}
          className="bg-white px-3 py-1 rounded-lg"
        >
          click
        </button>
      </div>
    </div>
  );
};

export default Contact;
