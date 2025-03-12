import React from "react";
import styles from "./Guarantees.module.css";
import SectionTitle from "../SectionTitle/SectionTitle";
const Guarantees = () => {
  return (
    <div id="guarantees" className={styles.guarantees}>
      <SectionTitle title="Гарантії" number="01" />
      <div className={styles.guaranteesContainer}>
        <div className={styles.topBlocks}>
          <div className={styles.block1}>
            <p className={styles.title}>12+</p>
            <p className={styles.subtitle}>років на ринку</p>
          </div>
          <div className={styles.divader}></div>
          <div className={styles.block2}>
            <p className={styles.title}>35</p>
            <p className={styles.subtitle}>виконаних проектів</p>
          </div>

          <div className={styles.divader}></div>
          <div className={styles.block3}>
            <p className={styles.title}>25</p>
            <p className={styles.subtitle}>магазинів</p>
          </div>
        </div>
        <div className={styles.bottomBlocks}>
          <div className={styles.block4}>
            <p className={styles.title}>100%</p>
            <p className={styles.subtitle}>задоволених клієнтів</p>
          </div>
          <div className={styles.divader}></div>
          <div className={styles.block5}>
            <p className={styles.title}>10</p>
            <p className={styles.subtitle}>будинків</p>
          </div>
          <div className={styles.divader}></div>

          <div className={styles.block6}>
            <p className={styles.title}>СС1</p>
            <p className={styles.subtitle}>сертифікація</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guarantees;
