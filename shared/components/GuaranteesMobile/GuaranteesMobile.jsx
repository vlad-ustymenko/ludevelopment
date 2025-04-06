"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";
import styles from "./GuaranteesMobile.module.css";

gsap.registerPlugin(ScrollTrigger);

const GuaranteesMobile = ({ containerRef }) => {
  const t = useTranslations("Guarantees");
  const numberRefs = useRef([]);

  useEffect(() => {
    if (numberRefs.current.length === 0) return;

    numberRefs.current.forEach((el) => {
      if (!el) return;

      const targetValue = parseInt(el.dataset.value, 10);
      gsap.fromTo(
        el,
        { textContent: 0 },
        {
          textContent: targetValue,
          duration: 1,
          ease: "power5.inOut",
          snap: { textContent: 1 },
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 15%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
            once: false,
          },
        }
      );
    });
  }, []);
  return (
    <div className={styles.guaranteesContainerMobile}>
      <div className={styles.flexBlock}>
        <div className={styles.blockMobile}>
          <span
            className={styles.titleMobile}
            ref={(el) => (numberRefs.current[0] = el)}
            data-value="9"
          >
            9
          </span>
          <span className={styles.titleMobile}>+</span>
          <p className={styles.subtitleMobile}>{t("years")}</p>
        </div>
        <div className={styles.divader}></div>
        <div className={styles.blockMobile}>
          <p
            className={styles.titleMobile}
            ref={(el) => (numberRefs.current[1] = el)}
            data-value="550"
          >
            550
          </p>
          <p className={styles.subtitleMobile}>{t("projects")}</p>
        </div>
      </div>
      <div className={styles.flexBlock}>
        <div className={styles.blockMobile}>
          <span
            className={styles.titleMobile}
            ref={(el) => (numberRefs.current[2] = el)}
            data-value="99	"
          >
            99
          </span>
          <span className={styles.titleMobile}>%</span>
          <p className={styles.subtitleMobile}>{t("clients")}</p>
        </div>
        <div className={styles.divader}></div>
        <div className={styles.blockMobile}>
          <p
            className={styles.titleMobile}
            ref={(el) => (numberRefs.current[3] = el)}
            data-value="16"
          >
            16
          </p>
          <p className={styles.subtitleMobile}>{t("shops")}</p>
        </div>
      </div>
      <div className={styles.flexBlock}>
        <div className={styles.blockMobile}>
          <p
            className={styles.titleMobile}
            ref={(el) => (numberRefs.current[4] = el)}
            data-value="85"
          >
            85
          </p>
          <p className={styles.subtitleMobile}>{t("houses")}</p>
        </div>
        <div className={styles.divader}></div>
        <div className={styles.blockMobile}>
          <p className={styles.titleMobile}>СС1</p>
          <p className={styles.subtitleMobile}>{t("certification")}</p>
        </div>
      </div>
    </div>
  );
};

export default GuaranteesMobile;
