"use client";

import React, { useRef } from "react";
import Image from "next/image";
import styles from "./MainScreen.module.css";

const MainScreen = () => {
  const subcontentRefs = useRef([]);
  const mainContentWrapperRef = useRef(null);
  const lineRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);
  console.log("header render");

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
              Будівництво
            </h1>
            <h2 className={styles.subtitle} ref={subtitleRef}>
              комерційних споруд та будинків
            </h2>
            <div className={styles.subcontentWrapper}>
              <div
                className={styles.subcontent}
                ref={(el) => (subcontentRefs.current[0] = el)}
              >
                <p className={styles.typeBuildText}>Комерційні</p>
                <p className={styles.price}>від 550$/м2</p>
              </div>
              <div className={styles.line} ref={lineRef}></div>
              <div
                className={styles.subcontent}
                ref={(el) => (subcontentRefs.current[1] = el)}
              >
                <p className={styles.typeBuildText}>Житлові</p>
                <p className={styles.price}>від 350$/м2</p>
              </div>
            </div>
          </div>
        </div>
        <a href="#feedback" className={styles.button} ref={buttonRef}>
          Консультація
        </a>
      </section>
    </>
  );
};

export default MainScreen;
