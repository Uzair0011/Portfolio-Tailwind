import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div id="About">
      <div className="block justify-items-center py-28 px-5 md:flex-wrap md:justify-center lg:flex lg:justify-between">
        <div
          className="
          w-80 py-3  md:flex md:flex-wrap md:px-6 "
        >
          <Image
            className="md:w-[400px] md:h-[400px]"
            src="/me.jpg"
            alt="picture"
            width={1000}
            height={1000}
          />
        </div>

        <div className=" pt-10 text-3xl font-bold text-center md:w-auto md:text-left lg:w-[900px] lg:justify-between ">
          <h1>About</h1>
          <p className="pt-5 text-xl font-normal text-justify md:pt-10">
            My name is Uzair Ahmed. I am a versatile full-stack developer, UI/UX
            designer, and graphics designer with a strong commitment to creating
            visually appealing and user-friendly digital experiences. Currently,
            I am further enhancing my skills by enrolling in an advanced IT
            course. With a deep interest in both the technical and creative
            sides of development, I am dedicated to mastering the full spectrum
            of design and development to deliver high-quality, innovative
            solutions.
            <br />
            <br />I aim to master full-stack development and establish a
            thriving freelance career, dedicated to providing my clients with
            top-notch, dependable results.
          </p>
          <Link href="/cv.pdf" target="blank">
            <button className="pt-10 md:pt-10">View CV</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
