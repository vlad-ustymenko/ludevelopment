"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import styles from "./MainScreen.module.css";

const MainScreen = () => {
  const subcontentRefs = useRef([]);

  useLayoutEffect(() => {
    if (subcontentRefs.current.length > 0) {
      gsap.fromTo(
        subcontentRefs.current[0],
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 0.5 }
      );

      gsap.fromTo(
        subcontentRefs.current[1],
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 0.5 }
      );
    }
    gsap.fromTo(
      `.${styles.line}`,
      { opacity: 0 },
      { opacity: 1, duration: 0.5 }
    );
    gsap.fromTo(
      `.${styles.mainContentWrapper}`,
      { opacity: 0 },
      { opacity: 1, duration: 0.5 }
    );
    gsap.fromTo(
      `.${styles.title}`,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 0.5 }
    );
    gsap.fromTo(
      `.${styles.subtitle}`,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 0.5 }
    );
    gsap.fromTo(
      `.${styles.button}`,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.5 }
    );
  }, []);

  return (
    <>
      <div className={styles.gradient}>
        <Image
          fill
          src="/images/mainScreen.webp"
          alt="main image"
          quality={100}
          className={styles.mainScreen}
        />
        <div className={styles.container}>
          <div className={styles.mainContentWrapper}>
            <h1 className={styles.title}>Будівництво</h1>
            <h2 className={styles.subtitle}>комерційних споруд та будинків</h2>
            <div className={styles.subcontentWrapper}>
              <div
                className={styles.subcontent}
                ref={(el) => (subcontentRefs.current[0] = el)}
              >
                <p>Комерційні</p>
                <p className={styles.price}>від 250$/м2</p>
              </div>
              <div className={styles.line}></div>
              <div
                className={styles.subcontent}
                ref={(el) => (subcontentRefs.current[1] = el)}
              >
                <p>Житлові</p>
                <p className={styles.price}>від 150$/м2</p>
              </div>
            </div>
          </div>
        </div>
        <a href="#form" className={styles.button}>
          Консультація
        </a>
      </div>
    </>
  );
};

export default MainScreen;
