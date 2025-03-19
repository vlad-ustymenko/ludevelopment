"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./Slider.module.css";

export default function Slider({ step, value, minValue, maxValue, setValue, ariaLabel }) {
  const sliderWidth = useRef(null);

  const handleChange = (e) => {
    if (sliderWidth.current) {
      setValue(e.target.value);
    }
  };

  return (
    <div className={styles.sliderContainer} ref={sliderWidth}>
      <label htmlFor="slider"></label>
      <input
        id="slider"
        type="range"
        min={minValue}
        max={maxValue}
        step={step}
        value={value}
        onChange={handleChange}
        className={styles.slider}
        aria-label={ariaLabel}
      />

      <span className={styles.sliderBackground}></span>
    </div>
  );
}
