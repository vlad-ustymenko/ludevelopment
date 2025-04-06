import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import SectionTitle from "../SectionTitle/SectionTitle";
import styles from "./Services.module.css";

const Services = () => {
  const t = useTranslations("Services");
  return (
    <section id="services" className={styles.container}>
      <SectionTitle title={t("title")} number="07" />
      <div className={styles.servicesWrapper}>
        <div className={styles.imageWrapper}>
          <Image
            src="/images/services/3.webp"
            alt="services"
            className={styles.image}
            fill
            sizes="100%"
          />
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>{t("devTitle")}</h2>
          <div className={styles.text}>
            {t("devText")}
            <ul className={styles.contentList}>
              <li className={styles.contentListItem}>
                <p>{t("devList.title1")}</p>
                <span>{t("devList.description1")}</span>
              </li>
              <li className={styles.contentListItem}>
                <p>{t("devList.title2")}</p>
                <span>{t("devList.description2")}</span>
              </li>
              <li className={styles.contentListItem}>
                <p>{t("devList.title3")}</p>
                <span>{t("devList.description3")}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.servicesWrapper}>
        <div className={styles.content}>
          <h2 className={styles.title}>{t("archTitle")}</h2>
          <div className={styles.text}>
            {t("archText")}
            <ul className={styles.contentList}>
              <li className={styles.contentListItem}>
                <p>{t("archList.title1")}</p>
                <span>{t("archList.description1")}</span>
              </li>
              <li className={styles.contentListItem}>
                <p>{t("archList.title2")}</p>
                <span>{t("archList.description2")}</span>
              </li>
              <li className={styles.contentListItem}>
                <p>{t("archList.title3")}</p>
                <span>{t("archList.description3")}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src="/images/services/1.webp"
            alt="services"
            className={styles.image}
            fill
            sizes="100%"
          />
        </div>
      </div>
      <div className={styles.servicesWrapper}>
        <div className={styles.imageWrapper}>
          <Image
            src="/images/services/4.webp"
            alt="services"
            className={styles.image}
            fill
            sizes="100%"
          />
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>{t("permitTitle")}</h2>
          <div className={styles.text}>
            {t("permitText")}
            <ul className={styles.contentList}>
              <li className={styles.contentListItem}>
                <p>{t("permitList.title1")}</p>
                <span>{t("permitList.description1")}</span>
              </li>
              <li className={styles.contentListItem}>
                <p>{t("permitList.title2")}</p>
                <span>{t("permitList.description2")}</span>
              </li>
              <li className={styles.contentListItem}>
                <p>{t("permitList.title3")}</p>
                <span>{t("permitList.description3")}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.servicesWrapper}>
        <div className={styles.content}>
          <h2 className={styles.title}>{t("buildTitle")}</h2>
          <div className={styles.text}>
            {t("buildText")}
            <ul className={styles.contentList}>
              <li className={styles.contentListItem}>
                <p>{t("buildList.title1")}</p>
                <span>{t("buildList.description1")}</span>
              </li>
              <li className={styles.contentListItem}>
                <p>{t("buildList.title2")}</p>
                <span>{t("buildList.description2")}</span>
              </li>
              <li className={styles.contentListItem}>
                <p>{t("buildList.title3")}</p>
                <span>{t("buildList.description3")}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src="/images/services/2.webp"
            alt="services"
            className={styles.image}
            fill
            sizes="100%"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
