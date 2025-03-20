"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Footer.module.css";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  return (
    <section className={styles.container}>
      <a href="#main" className={styles.logo}>
        <Image
          src="/logo.webp"
          fill
          sizes="100%"
          alt="Logo"
          className={styles.logoImage}
        />
      </a>
      <div className={styles.copyright}>
        &copy; 2016-{currentYear} <span>LineUp Development</span> All rights
        reserved
      </div>
    </section>
  );
};

export default Footer;
