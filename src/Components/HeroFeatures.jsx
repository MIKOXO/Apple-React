import React from "react";
import Buttons from "./Buttons";

const HeroFeatures = (props) => {
  return (
    <section className="flex flex-col justify-center items-center">
      <div className="flex flex-col items-center mt-8">
        <img src={props.img} className="w-[55%]" />
        <h1 className="text-white text-4xl font-semibold px-3 sm:text-5xl">
          {props.title}
        </h1>
        <h2 className="text-white text-xl mt-2 font-light px-3 sm:text-2xl">
          {props.subtitle}
        </h2>
      </div>

      <div className="flex flex-row justify-center items-center mt-2">
        <Buttons />
      </div>
    </section>
  );
};

export default HeroFeatures;
