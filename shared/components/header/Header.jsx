"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
// import Logo from "../../../src/assets/logo.svg";
// import SmallLogo from "../../../src/assets/smallLogo.svg";
import { useMenuContext } from "../../../context/MenuContext";
import { useViewportWidthContext } from "../../../context/ViewportWidthContext";
import styles from "./Header.module.css";
import Image from "next/image";
import MenuBtn from "../MenuBtn/MenuBtn";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  // const [viewportWidth, setViewportWidth] = useState(0);
  const [headerHeight, setHeaderHeight] = useState(0);
  const { activeMenu, setActiveMenu } = useMenuContext();
  const { viewportWidth, setViewportWidth } = useViewportWidthContext();

  const navListRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    if (headerRef.current) {
      const height = headerRef.current.offsetHeight;
      setHeaderHeight(height);

      // Оновлення змінної CSS в кореневому елементі
      document.documentElement.style.setProperty(
        "--header-height",
        `${height}px`
      );
    }
  }, [headerHeight]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setViewportWidth(window.innerWidth);

    const handleResize = () => setViewportWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (navListRef.current && navListRef.current.children.length > 0) {
        gsap.fromTo(
          navListRef.current.children,
          { opacity: 0, y: -50 },
          { opacity: 1, duration: 0.5, y: 0, stagger: 0.1 }
        );
      } else {
        console.log("No elements found");
      }
    }, 1);
  }, []);

  return (
    <div
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
          src="/smallLogo.svg"
          fill
          alt="Logo"
          priority
          className={styles.logoImage}
        />
      </a>
      {viewportWidth >= 1280 && (
        <nav className={styles.nav}>
          <ul className={styles.navList} ref={navListRef}>
            <li>
              <a href="#guarantees" className={styles.navLink}>
                Гарантії
              </a>
            </li>
            <li>
              <a href="#about" className={styles.navLink}>
                Про нас
              </a>
            </li>
            <li>
              <a href="#projects" className={styles.navLink}>
                Проекти
              </a>
            </li>
            <li>
              <a href="#services" className={styles.navLink}>
                Послуги
              </a>
            </li>
            <li>
              <a href="#contacts" className={styles.navLink}>
                Контакти
              </a>
            </li>
          </ul>
        </nav>
      )}
      {viewportWidth > 768 && (
        <a href="tel:0800 333 333" className={styles.telephone}>
          0800 333 333
        </a>
      )}
      {viewportWidth < 1280 && <MenuBtn />}
    </div>
  );
};

export default Header;
