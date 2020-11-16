import React from "react";
import SocialMediaImg from "../images/svg/social-media.svg";

const Footer = () => {
  return (
    <div className="py-8 flex flex-col items-center">
      <SocialMediaImg className="mb-3" />
      <p>© AlphaBrands 2020</p>
    </div>
  );
};

export default Footer;
