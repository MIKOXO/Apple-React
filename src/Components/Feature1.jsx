import React from "react";
import Buttons from "./Buttons";

const Feature1 = (props) => {
  return (
    <section className="flex flex-col justify-center items-center">
      <div className="flex flex-col items-center mt-8">
        <h1 className="text-4xl font-semibold px-3 sm:text-5xl">
          {props.title}
        </h1>
        <h2 className="mt-2 text-xl font-light px-3 sm:text-2xl">
          {props.subtitle}
        </h2>
      </div>

      <div className="mt-2">
        <Buttons />
      </div>
    </section>
  );
};

export default Feature1;
