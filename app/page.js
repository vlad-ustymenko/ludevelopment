import Header from "@/shared/components/Header/Header";
import MainScreen from "@/shared/components/MainScreen/MainScreen";
// import About from "@/shared/components/About/About";
// import Guarantees from "@/shared/components/Guarantees/Guarantees";
// import Projects from "@/shared/components/Projects/Projects";
// import Feedback from "@/shared/components/Feedback/Feedback";
import Menu from "@/shared/components/Menu/Menu";
// import Services from "@/shared/components/Services/Services";
// import Contacts from "@/shared/components/Contacts/Contacts";
import Footer from "@/shared/components/Footer/Footer";
// import Advantages from "@/shared/components/Advantages/Advantages";
// import Calculator from "@/shared/components/Calculator/Calculator";
import Modal from "@/shared/components/Modal/Modal";
import dynamic from "next/dynamic";

const Projects = dynamic(() => import("@/shared/components/Projects/Projects"));
const Guarantees = dynamic(() =>
  import("@/shared/components/Guarantees/Guarantees")
);
const About = dynamic(() => import("@/shared/components/About/About"));
const Feedback = dynamic(() => import("@/shared/components/Feedback/Feedback"));
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
