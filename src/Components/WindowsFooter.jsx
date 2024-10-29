import React from "react";
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

const WindowsFooter = () => {
  return (
    <div className="hidden gap-14 lg:grid lg:grid-cols-5">
      <div>
        <div>
          <h2 className="font-semibold mb-2">Shop and Learn</h2>
          <ul className="space-y-2">
            {shopLearnLinks.map((link, index) => (
              <li key={index} className="text-FooterLink text-sm">
                <a className="hover:underline" href={index}>
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-6">
          <h2 className="font-semibold mb-2">Apple Wallet</h2>
          <ul className="space-y-2">
            {appleWalletLinks.map((link, index) => (
              <li key={index} className="text-FooterLink text-sm">
                <a className="hover:underline" href={index}>
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <div className="mb-6">
          <h2 className="font-semibold mb-2">Account</h2>
          <ul className="space-y-2">
            {AccountLinks.map((link, index) => (
              <li key={index} className="text-FooterLink text-sm">
                <a className="hover:underline" href={index}>
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-semibold mb-2">Entertainment</h2>
          <ul className="space-y-2">
            {entertainmentLinks.map((link, index) => (
              <li key={index} className="text-FooterLink text-sm">
                <a className="hover:underline" href={index}>
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <h2 className="font-semibold mb-2">Apple Store</h2>
        <ul className="space-y-2">
          {appleStoreLinks.map((link, index) => (
            <li key={index} className="text-FooterLink text-sm">
              <a className="hover:underline" href={index}>
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <div className="mb-6">
          <h2 className="font-semibold mb-2">For Business</h2>
          <ul className="space-y-2">
            {businessLinks.map((link, index) => (
              <li key={index} className="text-FooterLink text-sm">
                <a className="hover:underline" href={index}>
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-6">
          <h2 className="font-semibold mb-2">For Education</h2>
          <ul className="space-y-2">
            {educationLinks.map((link, index) => (
              <li key={index} className="text-FooterLink text-sm">
                <a className="hover:underline" href={index}>
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-6">
          <h2 className="font-semibold mb-2">For Healthcare</h2>
          <ul className="space-y-2">
            {healthCareLinks.map((link, index) => (
              <li key={index} className="text-FooterLink text-sm">
                <a className="hover:underline" href={index}>
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-semibold mb-2">For Government</h2>
          <ul className="space-y-2">
            {governmentLinks.map((link, index) => (
              <li key={index} className="text-FooterLink text-sm">
                <a className="hover:underline" href={index}>
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <div className="mb-6">
          <h2 className="font-semibold mb-2">Apple Values</h2>
          <ul className="space-y-2">
            {appleValueLinks.map((link, index) => (
              <li key={index} className="text-FooterLink text-sm">
                <a className="hover:underline" href={index}>
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-6">
          <h2 className="font-semibold mb-2">About Apple</h2>
          <ul className="space-y-2">
            {AboutLinks.map((link, index) => (
              <li key={index} className="text-FooterLink text-sm">
                <a className="hover:underline" href={index}>
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WindowsFooter;
