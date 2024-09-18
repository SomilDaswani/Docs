import React from "react";

const Background = () => {
  return (
    <>
      <div className="fixed z-[2] w-full h-full ">
        <h1 className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[13vw] leading-none tracking-tighter font-semibold text-zinc-900">
          Docs.
        </h1>
        <div className="absolute top-[5%] w-full py-10 flex justify-center text-zinc-500 text-xl font-semibold">
          Document
        </div>
      </div>
    </>
  );
};

export default Background;
