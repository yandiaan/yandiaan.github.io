import { useEffect, useRef, useState } from "react";
import Circle from "./Circle";
import data from "./data";

interface LineProps {
  position: number;
}

export default function Line({ position }: LineProps) {
  const cardRef = useRef(null);
  const [obj] = useState(data()[position - 1]);

  return (
    <div className="w-1/2 h-screen flex items-center justify-center gap-24 text-white">
      <div
        ref={cardRef}
        className={`px-12 min-w-[500px] bg-glass animate-glow-shadow border-2 border-white py-12 flex justify-center items-start gap-4 flex-col text-sm absolute ${
          position % 2 === 1 ? "top-36" : "bottom-36"
        }`}
      >
        <span className="text-2xl font-bold">{obj.company}</span>
        <h1 className="font-light">{obj.role}</h1>
        <small className="text-lg italic">{obj.periode}</small>
      </div>
      <div className="h-2 w-1/2 bg-white overflow-y-hidden flex justify-center absolute"></div>
      <Circle />
      <div
        className={`absolute flex flex-col items-center text-center gap-8 overflow-visible ${
          position % 2 === 0 ? "mb-96" : "mt-96"
        } mx-24`}
      >
        <h1 className="capitalize overflow-visible font-extrabold w-[400px] text-4xl">
          {obj.desc.title}
        </h1>
        <p className="text-xl w-3/4 text-left">{obj.desc.body}</p>
      </div>
    </div>
  );
}
