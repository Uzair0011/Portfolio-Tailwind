"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

export default function Header() {
  // use state Button
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toogleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  // return
  return (
    <div className="flex justify-between px-5 py-1 items-center md:items-center w-full h-auto bg-black text-white md:flex md:justify-between md:px-12 md:h-[76px] overflow-hidden ">
      <div className="block items-center md:flex text-center ">
        <div className="flex justify-center py-2">
          {/* logo picture */}
          <Image src={"/uzair.jpg"} alt="Logo" width={50} height={50} />
        </div>
        {/* logo text */}
        <div className=" w-auto  text-xl font-bold md:pl-5">
          <Link href={"/"}> Uzair Ahmed</Link>
        </div>
      </div>

      <div>
        {/* nav bar */}

        <ul className="hidden md:flex md:gap-10 items-center ">
          <Link href={"/"}>
            <li className="listAll">Home</li>
          </Link>

          <Link href={"#About"}>
            <li className="listAll">About</li>
          </Link>
          <Link href={"#Contact"}>
            <li className="listAll">Contact</li>
          </Link>
          <Link
            className="
        bg-custom-blue px-1 rounded-md
        "
            href={"cv.pdf"}
            target="black"
          >
            <li className="listAll"> DOWNLOAD CV</li>
          </Link>
        </ul>

        {/* small navbar */}
        <div className="md:hidden" onClick={toogleMenu}>
          {isMenuOpen ? (
            <AiOutlineClose size={30} />
          ) : (
            <GiHamburgerMenu size={30} />
          )}
        </div>
        {isMenuOpen && (
          <ul className="  bg-green-700 flex flex-col gap-4 mt-4 md:hidden">
            <li>
              <a href="/" onClick={toogleMenu}>
                Home
              </a>
            </li>
            <li>Contact</li>
          </ul>
        )}
      </div>
    </div>
  );
}
