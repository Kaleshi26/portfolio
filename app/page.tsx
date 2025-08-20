import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import GitHubStats from "./components/GitHubStats";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <GitHubStats />
      <Contact />
    </>
  );
}
