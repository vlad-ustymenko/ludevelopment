"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import styles from "./LanguageSwitcher.module.css";

export default function LanguageSwitcher() {
  const [activeLocale, setActiveLocale] = useState(useLocale());
  const pathname = usePathname();
  const locale = useLocale();

  const switchTo = (newLocale) => {
    if (newLocale === locale) return;
    const segments = pathname.split("/");
    segments[1] = newLocale;
    const newPath = segments.join("/");
    window.location.href = newPath;
  };

  return (
    <div className={styles.wrapper}>
      <button
        className={`${styles.button} ${
          activeLocale === "en" ? styles.active : ""
        }`}
        onClick={() => switchTo("en")}
      >
        en
      </button>
      <span className={styles.separator}></span>
      <button
        className={`${styles.button} ${
          activeLocale === "uk" ? styles.active : ""
        }`}
        onClick={() => switchTo("uk")}
      >
        uk
      </button>
    </div>
  );
}
