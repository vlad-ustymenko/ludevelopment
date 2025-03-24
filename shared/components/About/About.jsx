import React from "react";
import Image from "next/image";
import styles from "./About.module.css";
import SectionTitle from "../SectionTitle/SectionTitle";

const About = () => {
  return (
    <section id="about" className={styles.container}>
      <SectionTitle
        title="Про нас"
        number="04"
        color="white"
        lineColor="var(--secondAccent)"
      ></SectionTitle>
      <div className={styles.aboutWrapper}>
        <div className={styles.content}>
          <h2 className={styles.title}>
            LineUp Development – це провідна девелоперська компанія, що
            спеціалізується на будівництві та архітектурному проєктуванні
            сучасних житлових і комерційних об’єктів. Ми поєднуємо передові
            технології, енергоефективні рішення та естетичний дизайн, створюючи
            простір для комфортного життя та успішного бізнесу.
          </h2>
          <h3 className={styles.subtitle}>Наші напрями діяльності:</h3>
          <ul className={styles.contentList}>
            <li className={styles.contentListItem}>
              <span>Девелопмент:</span> повний цикл реалізації проєктів – від
              концепції до введення в експлуатацію.
            </li>
            <li className={styles.contentListItem}>
              <span>Будівництво:</span> використання якісних матеріалів та
              інноваційних технологій для забезпечення довговічності та
              екологічності будівель.
            </li>
            <li className={styles.contentListItem}>
              <span>Архітектура та дизайн:</span> розробка унікальних
              архітектурних рішень, що поєднують функціональність і стиль.
            </li>
          </ul>
        </div>
        <Image
          src="/images/about.webp"
          alt="about"
          className={styles.image}
          width={500}
          height={400}
          loading="lazy"
        ></Image>
      </div>
    </section>
  );
};

export default About;
