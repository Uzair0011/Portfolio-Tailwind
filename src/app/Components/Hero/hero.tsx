"use client";
import Image from "next/image";
import "./style.css";
import Typewriter from "typewriter-effect";

export default function Hero() {
  return (
    <div className="w-full h-auto bg-black shadow-black relative">
      <div className="absolute pl-8 pt-20 text-black ">
        <span className="text-white text-2xl xs:text-4xl  sm:text-5xl md:text-6xl lg:text-8xl  underline ">
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

      <div className="imageSize1">
        <img src="/bg06.jpg" alt="image" />
      </div>
    </div>
  );
}
