import React from "react";

const Buttons = () => {
  return (
    <div className="flex flex-row justify-center items-center gap-3">
      <button className="bg-Blue1 text-white text-lg px-5 py-2 rounded-full hover:bg-transparent border-2 border-BorderBlue hover:text-Blue1 hover:ease-in-out duration-300">
        Learn More
      </button>
      <button className="text-Blue1 text-lg border-2 border-BorderBlue rounded-full px-6 py-2 hover:bg-Blue1 hover:text-white hover:ease-in-out duration-300">
        Buy
      </button>
    </div>
  );
};

export default Buttons;
