import About from "@/components/about";
import Content from "@/components/content";
import Intro from "@/components/intro";

export default function Home() {
  return (
    <div>
      <main>
        <Intro />
        <Content />
        <About />
      </main>
    </div>
  );
}
