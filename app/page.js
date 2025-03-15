import Header from "@/shared/components/Header/Header";
import MainScreen from "@/shared/components/MainScreen/MainScreen";
import About from "@/shared/components/About/About";
import Guarantees from "@/shared/components/Guarantees/Guarantees";
import Projects from "@/shared/components/Projects/Projects";
import Feedback from "@/shared/components/Feedback/Feedback";
import Menu from "@/shared/components/Menu/Menu";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <MainScreen />
        <Guarantees />
        <About />
        <Feedback />
        <Projects />
      </main>
      <Menu />
    </>
  );
}
