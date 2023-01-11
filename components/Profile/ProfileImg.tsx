/* eslint-disable @next/next/no-img-element */
// https://ariefsn.dev/#me
// http://www.devanswer.com/demo/progress-bar-timeline

import { useEffect, useState } from "react";

export default function ProfileImg() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setActive(!active);
    }, 2500);
  }, [active]);

  return (
    <div className="relative -mt-24 overflow-visible scale-50 justify-self-start xl:scale-90">
      <img
        className={`absolute z-10 bottom-0 left-0 transition-all ease-in-out duration-500 ${
          active ? "left-1/4 bottom-1/3 z-40 animate-wiggle" : ""
        }`}
        src={"/vector/circle1.svg"}
        width={320}
        height={320}
        alt=""
      />
      <img
        className={`absolute z-20 top-48 right-0 transition-all ease-in-out duration-500 ${
          active ? "right-1/3 top-1/2 animate-pulse" : ""
        }`}
        src={"/vector/circle2.svg"}
        width={320}
        height={320}
        alt=""
      />
      <img
        className={`absolute z-30 bottom-0 right-0 transition-all ease-in-out duration-500 ${
          active ? "bottom-1/3 right-1/2 z-10 animate" : ""
        }`}
        src={"/vector/circle3.svg"}
        width={320}
        height={320}
        alt=""
      />
      <img
        className={`absolute z-40  transition-all ease-in-out duration-1000 blur-none ${
          active ? "blur-3xl opacity-0" : "opacity-100"
        }`}
        src={"/img/profile1.png"}
        width={500}
        height={520}
        alt="profile"
      />
      <img
        className={`relative z-40 transition-all ease-in-out duration-1000  ${
          active ? "opacity-100  blur-none" : "opacity-0 blur-3xl"
        }`}
        src={"/img/profile2.png"}
        width={500}
        height={520}
        alt="profile"
      />
      <span
        className={`absolute bg-[#141E30] drop-shadow-[0_10px_25px_#141E30] animate-wiggle top-64 -right-12 z-40 p-8 rounded-3xl font-bold text-xl  transition-all ease-in-out duration-1000 ${
          active ? "opacity-100" : "opacity-0"
        }`}
      >
        Problem Solver
      </span>
      <span
        className={`absolute bg-[#141E30] drop-shadow-[0_10px_25px_#141E30] animate-wiggle top-44 -left-36 z-40 p-8 rounded-3xl font-bold text-xl transition-all ease-in-out duration-1000 ${
          active ? "opacity-100" : "opacity-0"
        }`}
      >
        Critical Thinker
      </span>
      <span
        className={`absolute bg-[#141E30] drop-shadow-[0_10px_25px_#141E30] animate-wiggle bottom-28 -left-24 z-40 p-8 rounded-3xl font-bold text-xl transition-all ease-in-out duration-1000 ${
          active ? "opacity-100" : "opacity-0"
        }`}
      >
        Tech Savvy
      </span>
    </div>
  );
}
