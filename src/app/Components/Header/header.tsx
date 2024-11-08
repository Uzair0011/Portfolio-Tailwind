import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="  block w-full h-auto bg-black text-white md:flex md:justify-between md:px-12 md:h-[76px] overflow-hidden ">
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
      {/* nav bar */}
      <ul className="flex justify-center py-2 gap-10 items-center ">
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
        bg-custom-blue px-3 rounded-md
        "
          href={"cv.pdf"}
          target="black"
        >
          <li className="listAll"> DOWNLOAD CV</li>
        </Link>
      </ul>
    </div>
  );
}
