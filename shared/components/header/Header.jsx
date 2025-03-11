"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import styles from "./Header.module.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(0);

  const navListRef = useRef(null);

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
    }, 100);
  }, []);

  return (
    <div
      className={`${styles.headerWrapper} ${isScrolled ? styles.shrink : ""}`}
    >
      <div className={styles.logo}>Logo</div>
      {viewportWidth >= 1024 && (
        <nav className={styles.nav}>
          {/* Прикріплюємо реф до <ul> */}
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
      {viewportWidth < 1024 && <div>button</div>}
    </div>
  );
};

export default Header;
