import React, { useState } from "react";
import { HeaderLinks } from "../Constants/Data";
import {
  FaSearch,
  FaShoppingBag,
  FaApple,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <section className="w-full h-[68px] bg-NavbarBG lg:overflow-hidden lg:backdrop-blur-md lg:sticky sm:top-0">
      <div className="container mx-auto flex flex-row justify-between items-center pt-3">
        <div className="ml-6 mt-1">
          <FaApple className="text-2xl" />
        </div>
        <div>
          <ul className="hidden justify-center items-center mt-2 lg:flex lg:flex-row">
            {HeaderLinks.map((nav) => (
              <li key={nav.id} className="mx-5 text-lg">
                <a href={nav.id}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden lg:flex flex-row justify-end items-end mt-2 gap-6 lg:gap-10">
          <FaSearch className="text-xl cursor-pointer" />
          <FaShoppingBag className="text-xl cursor-pointer" />
        </div>

        {/* Mobile Nav */}

        <div className="mr-6 text-xl mt-2 flex flex-row gap-5 items-center lg:hidden">
          <FaSearch className="text-xl cursor-pointer" />
          <FaShoppingBag className="text-xl cursor-pointer" />
          <button onClick={() => setToggle(!toggle)}>
            {toggle ? <FaTimes /> : <FaBars />}
          </button>
          <div
            className={`${
              toggle ? "flex" : "hidden"
            } absolute top-[65px] right-0 left-0 bg-white h-screen w-screen md:right-24 `}
          >
            <ul className="flex flex-col items-left justify-center ml-10 mt-6">
              {HeaderLinks.map((nav) => (
                <li key={nav.id} className="mx-5 text-2xl py-1 font-medium">
                  <a href={nav.id}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
