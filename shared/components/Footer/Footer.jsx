import React from "react";
import Image from "next/image";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <section className={styles.container}>
      <a href="#main" className={styles.logo}>
        <Image
          src="/logo.webp"
          fill
          alt="Logo"
          priority
          className={styles.logoImage}
        />
      </a>
      <div className={styles.copyright}>
        &copy; 2013-2025 <span>LineUp Development</span> All rights reserved
      </div>
    </section>
  );
};

export default Footer;
