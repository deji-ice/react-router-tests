import React, { useEffect, useRef } from "react";
import { words } from "../assets/data";
import gsap from "gsap";
import { introAnimation, progressAnimation } from "../utils/animations";

const Loader = () => {
  const loaderRef = useRef(null);
  const progressRef = useRef(null);
  const progressNumberRef = useRef(null);
  const wordGroupRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.add(introAnimation(wordGroupRef)).add(
      progressAnimation(progressRef, progressNumberRef, )
    );
  }, []);

  return (
    <div
      className="h-screen relative overflow-y-clip z-20 flex flex-col items-center justify-center "
      ref={loaderRef}
    >
      <div className="absolute bottom-0 h-[5vh] w-screen z-30 ">
        <div
          ref={progressRef}
          className="bg-black h-full flex justify-end pr-5 w-full scale-x-0 origin-bottom-left transform "
        >
   
        </div>
        <span
            ref={progressNumberRef}
            className=" absolute z-30 text-white top-0 text-4xl text-right "
          >
            0
          </span>
      </div>
      {/* <div className="overlay-top"></div> */}
      <div
        className="flex flex-col justify-center items-center h-[70%]"
        ref={wordGroupRef}
      >
        {words.map((word, index) => (
          <span key={index} className="text-2xl font-aeonik_bold ">
            {word}
          </span>
        ))}
      </div>
      <div className="overlay-bottom"></div>
    </div>
  );
};

export default Loader;
