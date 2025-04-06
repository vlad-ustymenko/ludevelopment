"use client";
import React from "react";

import styles from "./SectionTitle.module.css";

const SectionTitle = ({ title, number, color, blackBG }) => {
  return (
    <div
      className={`${styles.sectionTitle} ${blackBG ? styles.lineColor : ""}`}
    >
      <h2 className={styles.title}>{title} </h2>
      <p className={styles.number}>{number}</p>
    </div>
  );
};

export default SectionTitle;
