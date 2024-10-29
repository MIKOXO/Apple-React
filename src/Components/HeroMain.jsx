import React from "react";
import HeroFeatures from "./HeroFeatures";
import AppleWatch from "../Assets/WatchLogo.png";

const HeroMain = () => {
  return (
    <section className="mt-5">
      <div id="feature1">
        <HeroFeatures
          title="iPhone 14 Pro"
          subtitle="Hello, Apple Intelligence."
          description="Apple Intelligence coming this fall."
        />
      </div>
      <div id="feature2" className="mt-3">
        <HeroFeatures
          title="iPhone 14 Pro"
          subtitle="Hello, Apple Intelligence."
          description="Apple Intelligence coming this fall."
        />
      </div>
      <div id="feature3" className="mt-3">
        <HeroFeatures
          img={AppleWatch}
          subtitle="Thinstant Classic."
          description="Apple Intelligence coming this fall."
        />
      </div>
    </section>
  );
};

export default HeroMain;
