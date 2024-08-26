import gsap from "gsap";

export const introAnimation = (wordGroupRef) => {
  const tl = gsap.timeline();

  tl.to(wordGroupRef.current, {
    yPercent: -90,
    duration: 5,
    ease: "power3.inOut",
  });

  return tl;
};

export const progressAnimation = (progressRef, progressNumberRef) => {
  const tl = gsap.timeline();

  tl.to(progressRef.current, {
    scaleX: 1,
    duration: 5,
    ease: "power3.inOut",
  });
  tl.to(progressNumberRef.current, {
    x: 900,
    duration: 4,
    ease: "power3.inOut",
    onComplete: () => {
      console.log("animation complete");
    },
  });
  return tl;
};
