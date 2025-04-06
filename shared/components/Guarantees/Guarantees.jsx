"use client";
import React, { useRef } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import styles from "./Guarantees.module.css";
import GuaranteesMobile from "../GuaranteesMobile/GuaranteesMobile";
import GuaranteesDesktop from "../GuaranteesDesktop/GuaranteesDesktop";

const Guarantees = () => {
  const guaranteesRef = useRef(null);

  return (
    <section id="guarantees" ref={guaranteesRef} className={styles.guarantees}>
      <SectionTitle title="Гарантії" number="01" />
      <GuaranteesMobile containerRef={guaranteesRef} />
      <GuaranteesDesktop containerRef={guaranteesRef} />
    </section>
  );
};

export default Guarantees;
