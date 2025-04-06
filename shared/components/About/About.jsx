import React from "react";
import Image from "next/image";
import SectionTitle from "../SectionTitle/SectionTitle";
import { useTranslations } from "next-intl";
import styles from "./About.module.css";

const About = () => {
  const t = useTranslations("About");
  return (
    <section id="about" className={styles.container}>
      <SectionTitle title={t("title")} number="04" blackBG></SectionTitle>
      <div className={styles.aboutWrapper}>
        <div className={styles.content}>
          <h2 className={styles.title}>{t("description")}</h2>
          <h3 className={styles.subtitle}>{t("subtitle")}</h3>
          <ul className={styles.contentList}>
            <li className={styles.contentListItem}>
              <span>{t("development")}</span>
              {t("devText")}
            </li>
            <li className={styles.contentListItem}>
              <span>{t("building")}</span>
              {t("buildText")}
            </li>
            <li className={styles.contentListItem}>
              <span>{t("architecture")}</span>
              {t("archText")}
            </li>
          </ul>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src="/images/about.webp"
            alt="about"
            className={styles.image}
            fill
            sizes="100%"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
