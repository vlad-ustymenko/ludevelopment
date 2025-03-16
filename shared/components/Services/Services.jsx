import React from "react";
import Image from "next/image";
import SectionTitle from "../SectionTitle/SectionTitle";
import styles from "./Services.module.css";

const Services = () => {
  return (
    <div id="services" className={styles.container}>
      <SectionTitle
        title="Послуги"
        number="05"
        lineColor="var(--accent)"
      ></SectionTitle>
      <div className={styles.servicesWrapper}>
        <Image
          src="/images/services/3.jpg"
          alt="services"
          className={styles.image}
          width={500}
          height={400}
        ></Image>
        <div className={styles.content}>
          <h2 className={styles.title}>Девелопмент та інвестиційний аналіз</h2>
          <ul>
            <li>Аналіз ринку та вибір оптимальної локації</li>
            <li>Оцінка інвестиційної привабливості проєкту</li>
            <li>Розробка бізнес-плану та фінансової моделі</li>
          </ul>
        </div>
      </div>
      <div className={styles.servicesWrapper}>
        <div className={styles.content}>
          <h2 className={styles.title}>Проєктування та архітектура</h2>
          <ul>
            <li>Концептуальне проєктування</li>
            <li>Архітектурне та інженерне проєктування</li>
            <li>Дизайн інтер’єру та благоустрій територій</li>
          </ul>
        </div>
        <Image
          src="/images/services/1.jpg"
          alt="services"
          className={styles.image}
          width={500}
          height={400}
        ></Image>
      </div>
      <div className={styles.servicesWrapper}>
        <Image
          src="/images/services/4.jpg"
          alt="services"
          className={styles.image}
          width={500}
          height={400}
        ></Image>
        <div className={styles.content}>
          <h2 className={styles.title}>Отримання дозвільної документації</h2>
          <ul>
            <li>Узгодження містобудівних умов та обмежень</li>
            <li>Отримання дозволів на будівництво</li>
            <li>Взаємодія з державними органами</li>
          </ul>
        </div>
      </div>
      <div className={styles.servicesWrapper}>
        <div className={styles.content}>
          <h2 className={styles.title}>Будівництво та генеральний підряд</h2>
          <ul>
            <li>Управління будівельним процесом</li>
            <li>Контроль якості та відповідності проєкту</li>
            <li>Використання сучасних технологій і матеріалів</li>
          </ul>
        </div>
        <Image
          src="/images/services/2.jpg"
          alt="services"
          className={styles.image}
          width={500}
          height={400}
        ></Image>
      </div>
    </div>
  );
};

export default Services;
