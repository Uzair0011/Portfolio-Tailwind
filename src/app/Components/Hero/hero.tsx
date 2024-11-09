"use client";
import Image from "next/image";
import "./style.css";
import Typewriter from "typewriter-effect";

export default function Hero() {
  return (
    <div className="w-full h-auto bg-black shadow-black relative ">
      <div className="pl-8  pt-16 xs:pt-20 sm:pt-10 md:pt-20 text-black absolute z-20 mt-5">
        <span className="text-white text-2xl xs:text-4xl  sm:text-5xl md:text-6xl lg:text-8xl  underline "> 
          <div><h5 className="text-xl md:text-4xl"> Hello I'm</h5></div>
          <Typewriter
            options={{
              strings: [
                "Web Developer",
                "UI/UX Designer",
                "Website Designer",
                "Graphics Designer",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </span>
      </div>

      <div className="mt-20">
        <img src="/bg06.jpg" alt="image" />
      </div>
    </div>
  );
}
