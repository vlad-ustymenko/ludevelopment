import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";
import styles from "./GuaranteesDesktop.module.css";

gsap.registerPlugin(ScrollTrigger);

const GuaranteesDesktop = ({ containerRef }) => {
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
    <div className={styles.guaranteesContainer}>
      <div className={styles.topBlocks}>
        <div className={styles.block1}>
          <span
            className={styles.title}
            ref={(el) => (numberRefs.current[0] = el)}
            data-value="9"
          >
            9
          </span>
          <span className={styles.title}>+</span>
          <p className={styles.subtitle}>{t("years")}</p>
        </div>
        <div className={styles.divader}></div>
        <div className={styles.block2}>
          <p
            className={styles.title}
            ref={(el) => (numberRefs.current[1] = el)}
            data-value="550"
          >
            550
          </p>
          <p className={styles.subtitle}>{t("projects")}</p>
        </div>

        <div className={styles.divader}></div>
        <div className={styles.block3}>
          <p
            className={styles.title}
            ref={(el) => (numberRefs.current[2] = el)}
            data-value="16"
          >
            16
          </p>
          <p className={styles.subtitle}>{t("shops")}</p>
        </div>
      </div>
      <div className={styles.bottomBlocks}>
        <div className={styles.block4}>
          <span
            className={styles.title}
            ref={(el) => (numberRefs.current[3] = el)}
            data-value="99"
          >
            99
          </span>
          <span className={styles.title}>%</span>
          <p className={styles.subtitle}>{t("clients")}</p>
        </div>
        <div className={styles.divader}></div>
        <div className={styles.block5}>
          <p
            className={styles.title}
            ref={(el) => (numberRefs.current[4] = el)}
            data-value="85"
          >
            85
          </p>
          <p className={styles.subtitle}>{t("houses")}</p>
        </div>
        <div className={styles.divader}></div>

        <div className={styles.block6}>
          <p className={styles.title}>СС1</p>
          <p className={styles.subtitle}>{t("certification")}</p>
        </div>
      </div>
    </div>
  );
};

export default GuaranteesDesktop;
