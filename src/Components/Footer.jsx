import React from "react";
import FooterText from "./FooterText";
import MainMobileFooter from "./MainMobileFooter";
import WindowsFooter from "./WindowsFooter";

const Footer = () => {
  return (
    <section className="mt-20 bg-FooterBG w-full h-auto">
      <div className="mx-auto container flex flex-col justify-center items-center">
        <FooterText />
        <WindowsFooter />
      </div>
      <div className="px-6 mt-6">
        <MainMobileFooter />
      </div>

      <div className="mt-12 mx-auto container border-b-2 border-b-gray-200  px-6 lg:px-0 sm:mt-20">
        <h2 className="text-FooterText text-sm mb-5">
          More ways to shop:{" "}
          <a className="text-blue-700 underline" href="#">
            Find an apple store
          </a>{" "}
          or{" "}
          <a className="text-blue-700 underline" href="#">
            Other retailer
          </a>{" "}
          near you. Or call 1-800-MY-APPLE
        </h2>
      </div>
      <div className="mt-8 pb-5 mx-auto container flex flex-col px-6 lg:px-0 sm:flex-row ">
        <p className="text-FooterText text-sm ">
          Copyright &#169; {new Date().getFullYear()} Apple Inc. All rights
          reserved.
        </p>
        <div className="ml-0 space-x-4 text-FooterLink text-sm flex flex-col mt-2 sm:mt-0 sm:flex-row sm:ml-10">
          <a className="hover:underline" href="#">
            Privacy Policy
          </a>
          <a className="hover:underline" href="#">
            Terms of Use
          </a>
          <a className="hover:underline" href="#">
            Sales and Refunds
          </a>
          <a className="hover:underline" href="#">
            Legal
          </a>
          <a className="hover:underline" href="#">
            Site Map
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
