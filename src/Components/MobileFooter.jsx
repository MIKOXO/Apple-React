import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "react-ionicons";

const MobileFooter = (props) => {
  const [open, setOpener] = useState(false);
  const handleOpener = () => {
    setOpener(!open);
  };

  return (
    <section className="lg:hidden">
      <div className="flex flex-col mx-auto container py-1">
        <div className="border-b-[1px] border-b-gray-300 pb-3">
          <button
            onClick={handleOpener}
            className="flex flex-row w-full justify-between items-center"
          >
            <h2 className="text-sm">{props.title}</h2>
            {open ? <ChevronUp /> : <ChevronDown />}
          </button>
          <div className={`${open ? "flex" : "hidden"}`}>
            <ul className="space-y-2">{props.list}</ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileFooter;
