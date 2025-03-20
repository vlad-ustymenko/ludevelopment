"use client";
import React from "react";
import { useViewportWidthContext } from "../../../context/ViewportWidthContext";

import styles from "./SectionTitle.module.css";

const SectionTitle = ({ title, number, color, lineColor }) => {
  const { viewportWidth, setViewportWidth } = useViewportWidthContext();

  return (
    <div
      className={styles.sectionTitle}
      style={{
        color: color,
        borderBottom:
          viewportWidth < 768
            ? `0.8vw solid ${lineColor}`
            : viewportWidth < 1280 && viewportWidth >= 768
            ? `0.6vw solid ${lineColor}`
            : `0.3vw solid ${lineColor}`,
      }}
    >
      <h2 className={styles.title}>{title} </h2>
      <p className={styles.number}>{number}</p>
    </div>
  );
};

export default SectionTitle;
