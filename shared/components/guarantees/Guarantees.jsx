"use client";
import React, { useEffect, useRef } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import { useViewportWidthContext } from "../../../context/ViewportWidthContext";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Guarantees.module.css";

gsap.registerPlugin(ScrollTrigger);

const Guarantees = () => {
  const { viewportWidth } = useViewportWidthContext();
  const guaranteesRef = useRef(null);
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
            trigger: guaranteesRef.current,
            start: "top 30%",
            end: "bottom 30%",
            toggleActions: "play reverse play reverse",
            once: false,
          },
        }
      );
    });
  }, [viewportWidth]);

  return (
    <section id="guarantees" ref={guaranteesRef} className={styles.guarantees}>
      <SectionTitle title="Гарантії" number="01" color={"var(--background)"} />
      {viewportWidth < 1280 ? (
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
              <p className={styles.subtitleMobile}>років на ринку</p>
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
              <p className={styles.subtitleMobile}>виконаних проектів</p>
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
              <p className={styles.subtitleMobile}>задоволених клієнтів</p>
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
              <p className={styles.subtitleMobile}>магазинів</p>
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
              <p className={styles.subtitleMobile}>будинків</p>
            </div>
            <div className={styles.divader}></div>
            <div className={styles.blockMobile}>
              <p className={styles.titleMobile}>СС1</p>
              <p className={styles.subtitleMobile}>сертифікація</p>
            </div>
          </div>
        </div>
      ) : (
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
              <p className={styles.subtitle}>років на ринку</p>
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
              <p className={styles.subtitle}>виконаних проектів</p>
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
              <p className={styles.subtitle}>магазинів</p>
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
              <p className={styles.subtitle}>задоволених клієнтів</p>
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
              <p className={styles.subtitle}>будинків</p>
            </div>
            <div className={styles.divader}></div>

            <div className={styles.block6}>
              <p className={styles.title}>СС1</p>
              <p className={styles.subtitle}>сертифікація</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Guarantees;
