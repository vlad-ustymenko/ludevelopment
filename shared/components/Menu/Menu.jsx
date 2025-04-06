"use client";
import { useEffect } from "react";
import { useMenuContext } from "../../../context/MenuContext";
import { useTranslations } from "next-intl";
import styles from "./Menu.module.css";

const Menu = () => {
  const t = useTranslations("Menu");
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
            {t("guarantees")}
          </a>
        </li>
        <li onClick={() => setActiveMenu(false)}>
          <a href="#advantages" className={styles.navLink}>
            {t("benefits")}
          </a>
        </li>
        <li onClick={() => setActiveMenu(false)}>
          <a href="#prices" className={styles.navLink}>
            {t("prices")}
          </a>
        </li>
        <li onClick={() => setActiveMenu(false)}>
          <a href="#about" className={styles.navLink}>
            {t("about")}
          </a>
        </li>
        <li onClick={() => setActiveMenu(false)}>
          <a href="#projects" className={styles.navLink}>
            {t("projects")}
          </a>
        </li>
        <li onClick={() => setActiveMenu(false)}>
          <a href="#services" className={styles.navLink}>
            {t("services")}
          </a>
        </li>
        <li onClick={() => setActiveMenu(false)}>
          <a href="#contacts" className={styles.navLink}>
            {t("contacts")}
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
