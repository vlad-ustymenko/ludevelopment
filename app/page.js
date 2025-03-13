import Header from "@/shared/components/Header/Header";
import MainScreen from "@/shared/components/MainScreen/MainScreen";
import About from "@/shared/components/About/About";
import Guarantees from "@/shared/components/Guarantees/Guarantees";
import Projects from "@/shared/components/Projects/Projects";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <MainScreen />
        <Guarantees />
        <About />
        <Projects />
      </main>
    </>
  );
}
