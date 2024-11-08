import About from "./Components/about-us/page";
import Contact from "./Components/contact-us/page";
import Hero from "./Components/Hero/hero";

export default function Home() {
  return (
    <div>
      <Hero/>
      <About/>
      <Contact/>
    </div>
  );
}
