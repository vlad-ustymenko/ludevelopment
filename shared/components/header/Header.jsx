"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useMenuContext } from "../../../context/MenuContext";
import styles from "./Header.module.css";
import Image from "next/image";
import { useTranslations } from "next-intl";
import MenuBtn from "../MenuBtn/MenuBtn";

const Header = () => {
  const t = useTranslations("Header");
  const [isScrolled, setIsScrolled] = useState(false);
  const { activeMenu, setActiveMenu } = useMenuContext();

  const navListRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    if (headerRef.current) {
      const height = headerRef.current.offsetHeight;
      document.documentElement.style.setProperty(
        "--header-height",
        `${height}px`
      );
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // useEffect(() => {
  //   setTimeout(() => {
  //     if (navListRef.current && navListRef.current.children.length > 0) {
  //       gsap.fromTo(
  //         navListRef.current.children,
  //         { autoAlpha: 0, y: -50 },
  //         { autoAlpha: 1, duration: 0.5, y: 0, stagger: 0.1 }
  //       );
  //     } else {
  //       return;
  //     }
  //   }, 1);
  // }, []);

  return (
    <section
      className={
        activeMenu
          ? `${styles.headerWrapper} `
          : `${styles.headerWrapper} ${isScrolled ? styles.shrink : ""}`
      }
      ref={headerRef}
    >
      <a
        href="#main"
        className={styles.logo}
        onClick={() => setActiveMenu(false)}
      >
        <Image
          src="/logo.webp"
          fill
          sizes="100%"
          alt="Logo"
          priority
          className={styles.logoImage}
        />
      </a>

      <nav className={styles.nav}>
        <ul className={styles.navList} ref={navListRef}>
          <li>
            <a href="#guarantees" className={styles.navLink}>
              {t("guarantees")}
            </a>
          </li>
          <li>
            <a href="#advantages" className={styles.navLink}>
              {t("benefits")}
            </a>
          </li>
          <li>
            <a href="#prices" className={styles.navLink}>
              {t("prices")}
            </a>
          </li>
          <li>
            <a href="#about" className={styles.navLink}>
              {t("about")}
            </a>
          </li>
          <li>
            <a href="#projects" className={styles.navLink}>
              {t("projects")}
            </a>
          </li>
          <li>
            <a href="#services" className={styles.navLink}>
              {t("services")}
            </a>
          </li>
          <li>
            <a href="#contacts" className={styles.navLink}>
              {t("contacts")}
            </a>
          </li>
        </ul>
      </nav>

      <a href="tel:+38 (095) 319-57-58" className={styles.telephone}>
        +38 (095) 319-57-58
      </a>

      <MenuBtn />
    </section>
  );
};

export default Header;
