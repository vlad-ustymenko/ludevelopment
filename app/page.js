import Header from "@/shared/components/Header/Header";
import MainScreen from "@/shared/components/MainScreen/MainScreen";
import About from "@/shared/components/About/About";
import Guarantees from "@/shared/components/Guarantees/Guarantees";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <MainScreen />
        <Guarantees />
        <About />
      </main>
    </>
  );
}
