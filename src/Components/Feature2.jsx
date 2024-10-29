import React from "react";
import Buttons from "./Buttons";

const Feature2 = (props) => {
  return (
    <section className="flex flex-col justify-center items-center text-center text-white">
      <div className="flex flex-col items-center mt-[12rem] sm:mt-[23rem]">
        <h1 className="text-4xl font-semibold sm:text-5xl">{props.title}</h1>
        <h2 className="mt-2 text-xl font-light sm:text-2xl">
          {props.subtitle}
        </h2>
        <h2 className="mt-2 text-xl font-light sm:text-2xl">{props.desc2}</h2>
      </div>

      <div className="mt-2">
        <Buttons />
      </div>
    </section>
  );
};

export default Feature2;
