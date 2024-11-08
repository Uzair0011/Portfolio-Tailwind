import Image from "next/image";
export default function Footer() {
  return (
    <div className="w-[100%] lg:h-auto bg-slate-300 justify-items-center py-10 md:flex md:justify-around md:items-center  lg:justify-between md:px-8 ">
      <div className="">
        <div className="justify-items-center  md:flex md:items-center  ">
          <Image src="/uzair.jpg" alt="logo" width={70} height={50} />
          <h1 className="font-black text-1xl md:pl-4">Uzair Ahmed</h1>
        </div>
      </div>

      {/* 01 Box */}
      <div className="pt-6">
        <ul className="justify-items-center  md:justify-items-start">
          <li className="">
            <b>Website Designing</b>
          </li>
          <div className="justify-items-center  md:justify-items-start">
            <li className="dot">Simple Website</li>
            <li className="dot">E-Commerce Websites</li>
            <li className="dot">Landing Page</li>
            <li className="dot">Maintenance Contract</li>
          </div>
        </ul>
      </div>
      {/* 02 Box */}
      <div className="pt-6">
        <ul className="justify-items-center  md:justify-items-start">
          <li className="">
            <b>Graphics Designing</b>
          </li>
          <div className="justify-items-center md:justify-items-start">
            <li className="dot">Visiting Card Design</li>
            <li className="dot">Wedding Card Design</li>
            <li className="dot">Social Media Post Design</li>
            <li className="dot">Panaflex Designing</li>
          </div>
        </ul>
      </div>
    </div>
  );
}