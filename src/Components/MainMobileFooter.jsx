import React from "react";
import MobileFooter from "./MobileFooter";
import {
  appleWalletLinks,
  shopLearnLinks,
  AccountLinks,
  entertainmentLinks,
  appleStoreLinks,
  businessLinks,
  educationLinks,
  healthCareLinks,
  governmentLinks,
  appleValueLinks,
  AboutLinks,
} from "../Constants/Data";

const MainMobileFooter = () => {
  return (
    <div>
      <MobileFooter
        title="Shop and Learn"
        list={shopLearnLinks.map((link, index) => (
          <li key={index} className="text-FooterLink text-sm mt-3">
            <a className="hover:underline" href={index}>
              {link.title}
            </a>
          </li>
        ))}
      />
      <MobileFooter
        title="Apple Wallet"
        list={appleWalletLinks.map((link, index) => (
          <li key={index} className="text-FooterLink text-sm mt-3">
            <a className="hover:underline" href={index}>
              {link.title}
            </a>
          </li>
        ))}
      />
      <MobileFooter
        title="Account"
        list={AccountLinks.map((link, index) => (
          <li key={index} className="text-FooterLink text-sm mt-3">
            <a className="hover:underline" href={index}>
              {link.title}
            </a>
          </li>
        ))}
      />
      <MobileFooter
        title="Entertainment"
        list={entertainmentLinks.map((link, index) => (
          <li key={index} className="text-FooterLink text-sm mt-3">
            <a className="hover:underline" href={index}>
              {link.title}
            </a>
          </li>
        ))}
      />
      <MobileFooter
        title="Apple Store"
        list={appleStoreLinks.map((link, index) => (
          <li key={index} className="text-FooterLink text-sm mt-3">
            <a className="hover:underline" href={index}>
              {link.title}
            </a>
          </li>
        ))}
      />
      <MobileFooter
        title="For Business"
        list={businessLinks.map((link, index) => (
          <li key={index} className="text-FooterLink text-sm mt-3">
            <a className="hover:underline" href={index}>
              {link.title}
            </a>
          </li>
        ))}
      />
      <MobileFooter
        title="For Education"
        list={educationLinks.map((link, index) => (
          <li key={index} className="text-FooterLink text-sm mt-3">
            <a className="hover:underline" href={index}>
              {link.title}
            </a>
          </li>
        ))}
      />
      <MobileFooter
        title="For HealthCare"
        list={healthCareLinks.map((link, index) => (
          <li key={index} className="text-FooterLink text-sm mt-3">
            <a className="hover:underline" href={index}>
              {link.title}
            </a>
          </li>
        ))}
      />
      <MobileFooter
        title="For Government"
        list={governmentLinks.map((link, index) => (
          <li key={index} className="text-FooterLink text-sm mt-3">
            <a className="hover:underline" href={index}>
              {link.title}
            </a>
          </li>
        ))}
      />
      <MobileFooter
        title="Apple Values"
        list={appleValueLinks.map((link, index) => (
          <li key={index} className="text-FooterLink text-sm mt-3">
            <a className="hover:underline" href={index}>
              {link.title}
            </a>
          </li>
        ))}
      />
      <MobileFooter
        title="About Apple"
        list={AboutLinks.map((link, index) => (
          <li key={index} className="text-FooterLink text-sm mt-3">
            <a className="hover:underline" href={index}>
              {link.title}
            </a>
          </li>
        ))}
      />
    </div>
  );
};

export default MainMobileFooter;
