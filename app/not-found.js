import { useTranslations } from "next-intl";
import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  const t = useTranslations("NotFound");
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>{t("title")}</h1>
      <p className={styles.text}>{t("text")}</p>
      <Link href="/" className={styles.link}>
        {t("link")}
      </Link>
    </main>
  );
}
