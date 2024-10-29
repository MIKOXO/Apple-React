import React from "react";
import Feature1 from "./Feature1";
import Feature2 from "./Feature2";

const Features = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 ">
      <div id="grid1" className="mx-auto mt-5">
        <Feature1
          title="Trade In"
          subtitle="Upgrade and save. It's that easy."
        />
      </div>
      <div id="grid2" className="mx-auto mt-5">
        <Feature2
          title="AirPods Pro 2"
          subtitle="Hearing Aid and Hearing Test features coming "
          desc2="with a free software update this fall"
        />
      </div>
      <div id="grid3" className="mx-auto mt-5 text-white">
        <Feature1
          title="MacBook Pro"
          subtitle="Supercharged by M2 Pro and M2 Max"
        />
      </div>
      <div id="grid4" className="mx-auto mt-5">
        <Feature1
          title="Card"
          subtitle="Get upto 3% Daily cash back"
          desc2="with every purchase"
        />
      </div>
      <div id="grid5" className="mx-auto mt-5">
        <Feature1 title="ipod" subtitle="Lovable. Drawable. Magical" />
      </div>

      <div id="grid6" className="mx-auto mt-5 text-white">
        <Feature1 title="Home Pod" subtitle="Profound Sound" />
      </div>
    </section>
  );
};

export default Features;
