import { useState } from "react";
import Circle from "./Circle";
import data from "./data";
<Circle />;

interface LineProps {
  position: number;
}

export default function Line({ position }: LineProps) {
  const [obj] = useState(data()[position - 1]);

  return (
    <div className="w-1/2 h-screen text-white">
      <div
        className={`flex ${
          position % 2 === 0 ? "flex-col-reverse" : "flex-col"
        } justify-center items-center h-full gap-16`}
      >
        <div
          className={`text-sm basis-1/2 flex items-${
            position % 2 === 0 ? "start" : "end"
          }`}
        >
          <div className="flex flex-col bg-glass p-8">
            <span className="text-2xl font-bold">{obj.company}</span>
            <h1 className="font-light">{obj.role}</h1>
            <small className="text-lg italic">{obj.periode}</small>
          </div>
        </div>
        <div className="h-2 w-1/2 bg-white overflow-y-hidden top-1/2 absolute"></div>
        <Circle />
        <div
          className={`flex flex-col items-center text-center justify-${
            position % 2 === 0 ? "end" : "start"
          } basis-1/2  gap-8 overflow-visible mx-24`}
        >
          <h1 className="capitalize overflow-visible font-extrabold w-[400px] text-2xl xl:text-4xl">
            {obj.desc.title}
          </h1>
          <p className="xl:text-xl text-sm w-3/4 text-left">{obj.desc.body}</p>
        </div>
      </div>
    </div>
  );
}
