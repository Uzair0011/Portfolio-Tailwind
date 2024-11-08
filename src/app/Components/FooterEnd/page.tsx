import Image from "next/image";
import Link from "next/link";
export default function FooterEnd() {
  return (
    <div className="bg-black text-white justify-items-center  ">
      {/* only white line */}
      <div className="border-y-1"></div>
      {/* 2 div */}
      <section className="md:w-full md:px-5 md:flex md:items-center md:justify-between">
        <div className="textCopyReseved">
          &copy; Copyright 2023 Uzair Ahmed. All Rights Reserved.
        </div>
        <div className="justify-self-center md:flex">
          <Link href="https://www.linkedin.com/in/uzair0011/" target="black">
            <Image src="/i2.png" alt="image" width={50} height={50} />
          </Link>
          <Link href="/" target="black">
            <Image src="/i1.png" alt="image" width={50} height={50} />
          </Link>
        </div>
      </section>
    </div>
  );
}
