import Header from "@/shared/components/Header/Header";
import MainScreen from "@/shared/components/MainScreen/MainScreen";
import dynamic from "next/dynamic";
import { setRequestLocale } from "next-intl/server";
import Projects from "@/shared/components/Projects/Projects";
import Guarantees from "@/shared/components/Guarantees/Guarantees";
import About from "@/shared/components/About/About";
import Feedback from "@/shared/components/Feedback/Feedback";
import Footer from "@/shared/components/Footer/Footer";
import Services from "@/shared/components/Services/Services";
import Contacts from "@/shared/components/Contacts/Contacts";
import Advantages from "@/shared/components/Advantages/Advantages";
import Calculator from "@/shared/components/Calculator/Calculator";
const Menu = dynamic(() => import("@/shared/components/Menu/Menu"));
const Modal = dynamic(() => import("@/shared/components/Modal/Modal"));

export default async function Home({ params }) {
  const { locale } = await params;

  setRequestLocale(locale);
  return (
    <>
      <Header />
      <main>
        <MainScreen />
        <Guarantees />
        <Advantages />
        <Calculator />
        <About />
        <Feedback />
        <Projects />
        <Services />
        <Contacts />
      </main>
      <Footer />
      <Menu />
      <Modal />
    </>
  );
}
