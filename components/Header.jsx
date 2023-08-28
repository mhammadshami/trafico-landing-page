import React, { useState, useEffect } from "react";

// import next image
import Image from "next/image";

// import next link
import Link from "next/link";

// import components
import Nav from "./Nav";
import NavMobile from "./NavMobile";

// import icons
import { HiMenu } from "react-icons/hi";

const Header = ({ headerData, navData }) => {
  // header state
  const [header, setHeader] = useState(false);
  // navMobile state
  const [navMobile, setNavMobile] = useState(false);

  // destructure header data
  const { logoImgV1, logoImgV2, btnText } = headerData;

  // scroll event
  useEffect(() => {
    window.addEventListener("scroll", () => {
      // set the header state according to scrollY position
      window.scrollY > 80 ? setHeader(true) : setHeader(false);
    });
  });
  return (
    <header
      className={`${
        header ? "bg-white p-3 rounded-md drop-shadow-primary" : "py-[40px]"
      } fixed w-full left-0 right-0 max-w-[90vw] mx-auto lg:max-w-[1120px] z-20 flex justify-between items-center transition-all duration-500 `}
    >
      {/* logo v1 */}
      <Link href={"/"}>
        <a href="">
          <Image
            src={`${header ? logoImgV2 : logoImgV1}`}
            width={header ? 180 : 200}
            height={50}
          />
        </a>
      </Link>

      {/* nav & button wrapper - initially hidden */}
      <div className="hidden lg:flex gap-x-[96px]">
        {/* nav */}
        <Nav navData={navData} header={header} />
        {/* btn */}
        <button className="btn">{btnText}</button>
      </div>

      {/* nav menu button - hide on large screens */}
      <div
        className="lg:hidden cursor-pointer"
        onClick={() => setNavMobile(!navMobile)}
      >
        <HiMenu className="text-4xl text-accent-hover" />
      </div>

      {/* nav mobile - hide on large screens */}
      <div
        className={`${
          navMobile ? "max-h-[154px]" : "max-h-0"
        } lg:hidden absolute top-full mt-2 w-full left-0 rounded-md overflow-hidden shadow-2xl transition-all`}
      >
        <NavMobile navData={navData} />
      </div>
    </header>
  );
};

export default Header;
