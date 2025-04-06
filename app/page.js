import Header from "@/shared/components/Header/Header";
import MainScreen from "@/shared/components/MainScreen/MainScreen";
import dynamic from "next/dynamic";

const Menu = dynamic(() => import("@/shared/components/Menu/Menu"));
const Projects = dynamic(() => import("@/shared/components/Projects/Projects"));
const Guarantees = dynamic(() =>
  import("@/shared/components/Guarantees/Guarantees")
);
const About = dynamic(() => import("@/shared/components/About/About"));
const Feedback = dynamic(() => import("@/shared/components/Feedback/Feedback"));
const Modal = dynamic(() => import("@/shared/components/Modal/Modal"));
const Footer = dynamic(() => import("@/shared/components/Footer/Footer"));
const Services = dynamic(() => import("@/shared/components/Services/Services"));
const Contacts = dynamic(() => import("@/shared/components/Contacts/Contacts"));
const Advantages = dynamic(() =>
  import("@/shared/components/Advantages/Advantages")
);
const Calculator = dynamic(() =>
  import("@/shared/components/Calculator/Calculator")
);

export default function Home() {
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
