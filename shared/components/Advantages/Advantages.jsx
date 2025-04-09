import React from "react";
import styles from "./Advantages.module.css";
import SectionTitle from "../SectionTitle/SectionTitle";
import { useTranslations } from "next-intl";
import Image from "next/image";

const AdvantagesItem = [
  {
    imageSrc: "/images/advantages/2.webp",
    key: "works",
  },
  {
    imageSrc: "/images/advantages/4.webp",
    key: "instances",
  },

  {
    imageSrc: "/images/advantages/3.webp",
    key: "protection",
  },
  {
    imageSrc: "/images/advantages/6.webp",
    key: "experts",
  },
  {
    imageSrc: "/images/advantages/5.webp",
    key: "ingeners",
  },
  {
    imageSrc: "/images/advantages/1.webp",
    key: "tecnologies",
  },
];

const Advantages = () => {
  const t = useTranslations("Benefits");
  return (
    <section className={styles.container} id="advantages">
      <SectionTitle title={t("title")} number="02" blackBG />
      <div className={styles.contentWrapper}>
        <h2 className={styles.title}>{t("subtitle")}</h2>
        <div className={styles.advantagesGrid}>
          {AdvantagesItem.map((item) => (
            <div key={item.key} className={styles.imageWrapper}>
              <Image
                src={item.imageSrc}
                alt="advantages"
                fill
                sizes="(max-width: 768px) 100vw, (min-width: 768px) and (max-width: 1023px) 50vw, 33vw"
                className={styles.image}
              ></Image>
              <p className={styles.text}>{t(`${item.key}`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
