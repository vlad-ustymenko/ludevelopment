import Guarantees from "@/shared/components/guarantees/Guarantees";
import styles from "./page.module.css";
import Header from "@/shared/components/header/Header";
import MainScreen from "@/shared/components/mainScreen/MainScreen";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <MainScreen />
        <Guarantees />
      </main>
    </>
  );
}
