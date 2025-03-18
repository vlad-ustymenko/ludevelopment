"use client";
import { useEffect } from "react";
import { useMenuContext } from "../../../context/MenuContext";

import styles from "./Menu.module.css";

const Menu = () => {
  const { activeMenu, setActiveMenu } = useMenuContext();
  useEffect(() => {
    if (activeMenu) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
    }
  }, [activeMenu]);

  return (
    <nav className={activeMenu ? `${styles.nav} ${styles.active}` : styles.nav}>
      <ul className={styles.navList}>
        <li onClick={() => setActiveMenu(false)}>
          <a href="#guarantees" className={styles.navLink}>
            Гарантії
          </a>
        </li>
        <li onClick={() => setActiveMenu(false)}>
          <a href="#about" className={styles.navLink}>
            Про нас
          </a>
        </li>
        <li onClick={() => setActiveMenu(false)}>
          <a href="#projects" className={styles.navLink}>
            Проекти
          </a>
        </li>
        <li onClick={() => setActiveMenu(false)}>
          <a href="#services" className={styles.navLink}>
            Послуги
          </a>
        </li>
        <li onClick={() => setActiveMenu(false)}>
          <a href="#contacts" className={styles.navLink}>
            Контакти
          </a>
        </li>
      </ul>
      <a href="tel:+38 (095) 319-57-58" className={styles.telephone}>
        +38 (095) 319-57-58
      </a>
    </nav>
  );
};

export default Menu;
