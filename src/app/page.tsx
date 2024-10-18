import About from "@/components/about";
import Content from "@/components/content";
import Intro from "@/components/intro";
import Record from "@/components/record";
import SecureYourSpot from "@/components/secure-your-spot";

export default function Home() {
  return (
    <div>
      <main>
        <Intro />
        <Content />
        <About />
        <Record />
        <SecureYourSpot />
      </main>
    </div>
  );
}
