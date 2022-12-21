import { useState } from "react";

import tiktok from "../images/icons/tiktok-48.png";
import linkedin from "../images/icons/linkedin-48.png";
import email from "../images/icons/email-48.png";
import instagram from "../images/icons/instagram-48.png";

export default function SocialSection() {

  const socialAccounts = [
    {
      url: "https://www.tiktok.com/@alishanakamura.hair",
      class: "tiktok",
      iconUrl: "../src/images/icons/tiktok-48.png",
      iconSrc: tiktok.src,
    },
    {
      url: "https://www.instagram.com/alishanakamura.hair",
      class: "instagram",
      iconUrl: "../src/images/icons/instagram-48.png",
      iconSrc: instagram.src,
    },
    {
      url: "https://www.linkedin.com/in/alisha-nakamura-60532125b/",
      class: "linkedin",
      iconUrl: "../src/images/icons/linkedin-48.png",
      iconSrc: linkedin.src,
    },
    {
      url: "mailto:alishanakamura+www@protonmail.com",
      class: "email",
      iconUrl: "../src/images/icons/email-48.png",
      iconSrc: email.src,
    },
  ];

  const socialButtons = socialAccounts.map((socialAccount, index) => {
    const socialIconStyle = {
      backgroundImage: `url(${socialAccount.iconSrc})`,
      backgroundPosition: "center",
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      width: "20px",
      height: "20px",
    };
    return (
      <>
        <a href={socialAccount.url} target="_blank" rel="noreferrer"  className="p-2 rounded border border-transparent hover:border hover:border-slate-600 transition-all">
          <div key={index} style={socialIconStyle}></div>
        </a>
      </>
    );
  });

  return (
    <div className="social-container social-icon-wrapper items-center flex flex-col">
      <div className="social-icon-wrapper flex justify-self-center justify-around">{socialButtons}</div>
      <div className="ig-handle opacity-90">@alishanakamura.hair</div>
    </div>
  );
}
