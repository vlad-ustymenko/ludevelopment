"use client";
import { useTranslations } from "next-intl";
import React, { useRef } from "react";
import Image from "next/image";
import styles from "./MainScreen.module.css";

const MainScreen = () => {
  const t = useTranslations("MainScreen");
  const subcontentRefs = useRef([]);
  const mainContentWrapperRef = useRef(null);
  const lineRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);

  return (
    <>
      <section className={styles.gradient} id="main">
        <Image
          fill
          sizes="100vw"
          src="/images/mainScreen.webp"
          alt="main image"
          priority
          className={styles.mainScreen}
        />
        <div className={styles.container}>
          <div
            className={styles.mainContentWrapper}
            ref={mainContentWrapperRef}
          >
            <h1 className={styles.title} ref={titleRef}>
              {t("title")}
            </h1>
            <h2 className={styles.subtitle} ref={subtitleRef}>
              {t("subtitle")}
            </h2>
            <div className={styles.subcontentWrapper}>
              <div
                className={styles.subcontent}
                ref={(el) => (subcontentRefs.current[0] = el)}
              >
                <p className={styles.typeBuildText}>{t("commercial.name")}</p>
                <p className={styles.price}>{t("commercial.price")}</p>
              </div>
              <div className={styles.line} ref={lineRef}></div>
              <div
                className={styles.subcontent}
                ref={(el) => (subcontentRefs.current[1] = el)}
              >
                <p className={styles.typeBuildText}>{t("houses.name")}</p>
                <p className={styles.price}>{t("houses.price")}</p>
              </div>
            </div>
          </div>
        </div>
        <a href="#feedback" className={styles.button} ref={buttonRef}>
          {t("button")}
        </a>
      </section>
    </>
  );
};

export default MainScreen;
