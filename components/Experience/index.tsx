import Image from "next/image";
import Line from "./Line";

export default function Experience() {
  return (
    <div
      id="experiences"
      className="w-screen h-screen text-6xl flex justify-between items-center text-white"
    >
      <div className="flex justify-center items-center scale-50 xl:scale-100">
        <p className="absolute overflow-y-hidden font-bold">
          Recap <br /> Of <br /> My <br /> Experiences
        </p>
        <Image
          src={"/vector/download.svg"}
          alt={""}
          width={700}
          height={700}
          className="mt-12 absolute animate-spin-slow"
        />
      </div>
      <Line position={1} />
    </div>
  );
}
