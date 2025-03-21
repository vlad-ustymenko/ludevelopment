import React from "react";
import styles from "./Advantages.module.css";
import SectionTitle from "../SectionTitle/SectionTitle";
import Image from "next/image";

const AdvantagesItem = [
  {
    imageSrc: "/images/advantages/2.jpg",
    text: "Виконання робіт згідно з ДБН та рекомендаціями ДСТУ",
  },
  {
    imageSrc: "/images/advantages/4.jpg",
    text: "Швидку зміну проектних рішень та погодження у відповідних інстанціях ",
  },
  {
    imageSrc: "/images/advantages/6.jpg",
    text: "Експертну оцінку проектних рішень та надання рекомендацій",
  },
  {
    imageSrc: "/images/advantages/3.jpg",
    text: "Живучість об’єкту – захист об’єкту від уламків збитих дронів та ракет ",
  },
  {
    imageSrc: "/images/advantages/5.jpg",
    text: "Висококваліфікованих інженерів з багаторічним досвідом в будівництві",
  },
  {
    imageSrc: "/images/advantages/1.webp",
    text: "Використання передових технологій в будівництві",
  },
];

const Advantages = () => {
  return (
    <section className={styles.container} id="advantages">
      <SectionTitle
        title="Наші переваги"
        number="02"
        lineColor="var(--secondAccent)"
        color="white"
      />
      <div className={styles.contentWrapper}>
        <h2 className={styles.title}>Обираючи нас ви отримуєте</h2>
        <div className={styles.advantagesGrid}>
          {AdvantagesItem.map((item) => (
            <div key={item.text} className={styles.imageWrapper}>
              <Image
                src={item.imageSrc}
                alt="advantages"
                width={500}
                height={500}
                className={styles.image}
              ></Image>
              <p className={styles.text}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
