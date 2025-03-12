import React from "react";
import Image from "next/image";
import styles from "./About.module.css";
import SectionTitle from "../SectionTitle/SectionTitle";

const About = () => {
  return (
    <div id="about" className={styles.container}>
      <SectionTitle title="Про нас" number="02" color="white"></SectionTitle>
      <div className={styles.aboutWrapper}>
        <div className={styles.content}>
          <h2 className={styles.title}>
            Label – це провідна девелоперська компанія, що спеціалізується на
            будівництві та архітектурному проєктуванні сучасних житлових і
            комерційних об’єктів. Ми поєднуємо передові технології,
            енергоефективні рішення та естетичний дизайн, створюючи простір для
            комфортного життя та успішного бізнесу.
          </h2>
          <p>Наші напрями діяльності:</p>
        </div>
        <Image
          src="/images/about.webp"
          alt="about"
          className={styles.image}
          width={500}
          height={400}
        ></Image>
      </div>
    </div>
  );
};

export default About;
