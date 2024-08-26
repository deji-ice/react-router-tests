import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import SplitType from "split-type";
import Loader from "../components/Loader";

const Gsap = () => {
  const container = useRef(null);
  const circle = useRef();
  //   gsap.registerPlugin(useGSAP);
  //   useGSAP(
  //     () => {
  //       // gsap code here...
  //       gsap

  //       //   gsap.to(circle.current, { x: 360, y:36 }); // <-- automatically reverted
  //     },
  //     { scope: container }
  //   );

  useEffect(() => {
    const myText = new SplitType(circle.current);

    myText.chars.forEach((char) => {
      char.style.transform = "translateY(115px)";
      char.style.transition = "transform .5s";
    });

    gsap.to(".char", {
      y: 0,
      stagger: 0.05,
      delay: 0.2,
      duration: 0.1,
    });
  }, []);

  return (
    <div className={`my-16 flex flex-col items-center h-screen w-screen`}>
      {/* <nav>
        <div>
            <p>Logo</p>
            <p>About</p>
            <p>Blog</p>
        </div>
      </nav> */}

      {/* <Loader /> */}
      <div
        ref={container}
        className=" w-full h-full  flex flex-col items-center "
      >
        <div ref={circle} className="bg-red-600 h-40 w-40 rounded-xl">
          circle
        </div>
        <div className="grid place-content-center h-screen">
          <h2
            ref={circle}
            className="
 text-[7rem] font-aeonik_bold leading-[10rem] "
          >
            Ayodeji.Atanda
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Gsap;
