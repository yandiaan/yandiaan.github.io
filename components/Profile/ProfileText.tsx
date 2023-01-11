import React from "react";

export default function ProfileText() {
  return (
    <div className="flex flex-col gap-3 scale-75 basis-1/4 xl:scale-100">
      <h1 className="text-8xl font-bold overflow-hidden">Hello.</h1>
      <h6 className="text-md font-bold tracking-widest">
        My Name is Dian Setiawan
      </h6>
      <span className="font-thin w-80">
        seorang mahasiswa yang cinta dengan teknologi informasi dan senang
        mempelajari hal hal baru mengenai dunia teknologi dan programming.
      </span>
    </div>
  );
}
