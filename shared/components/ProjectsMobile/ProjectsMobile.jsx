"use client";
import React, {
  useRef,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import Image from "next/image";
import { ChevronRight, ChevronLeft } from "lucide-react";
import projectsData from "@/assets/projectData/projects.json";
import styles from "./ProjectsMobile.module.css";

const ProjectsMobile = () => {
  const [index, setIndex] = useState(0);
  const [dotIndex, setDotIndex] = useState(0);
  const cardMobileRef = useRef(null);
  const slideRef = useRef(null);
  const [cardMobileWidth, setCardMobileWidth] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  useEffect(() => {
    setCardMobileWidth(cardMobileRef.current.offsetWidth);
  }, []);

  const nextSlideMobile = useCallback(() => {
    if (index >= projectsData.length - 1 || isAnimating) {
      return;
    }
    setIsAnimating(true);
    slideRef.current.scrollBy({
      left: cardMobileWidth + 16,
      behavior: "smooth",
    });

    setDotIndex((prevIndex) => prevIndex + 1);

    setTimeout(() => {
      setIndex((prevIndex) => prevIndex + 1);
      setIsAnimating(false);
    }, 500);
  }, [index, isAnimating, cardMobileWidth]);

  const prevSlideMobile = useCallback(() => {
    if (index <= 0 || isAnimating) {
      return;
    }

    setIsAnimating(true);
    slideRef.current.scrollBy({
      left: -cardMobileWidth - 16,
      behavior: "smooth",
    });

    setDotIndex((prevIndex) => prevIndex - 1);

    setTimeout(() => {
      setIndex((prevIndex) => prevIndex - 1);
      setIsAnimating(false);
    }, 500);
  }, [index, isAnimating, cardMobileWidth]);
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX - touchEndX > 50) {
      nextSlideMobile();
    }

    if (touchEndX - touchStartX > 50) {
      prevSlideMobile();
    }
  };

  const dots = useMemo(() => {
    return Array.from({
      length: projectsData.length,
    });
  }, []);
  return (
    <>
      <div className={styles.sliderContainer} ref={slideRef}>
        <div
          className={styles.projectsGalleryMobile}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {projectsData.map((project, idx) => (
            <div
              key={idx}
              ref={cardMobileRef}
              className={styles.projectsCardGalleryMobile}
            >
              <Image
                fill
                sizes="100vw"
                src={project.img}
                alt={project.title}
                loading="lazy"
              />
              <div className={styles.descriptionShadowMobile}>
                <div className={styles.descriptionWrapperMobile}>
                  <p className={styles.titleMobile}>{project.title}</p>
                  <p className={styles.descriptionMobile}>
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.buttonsWrapper}>
        <button
          aria-label="prevSlide"
          className={styles.navButton}
          onClick={prevSlideMobile}
          disabled={index === 0}
        >
          <ChevronLeft className={styles.icon} />
        </button>
        <ul className={styles.dotList}>
          {dots.map((_, idx) => (
            <li
              key={idx}
              className={styles.dot}
              style={{
                backgroundColor:
                  dotIndex === idx ? "var(--secondAccent)" : "white",
              }}
            />
          ))}
        </ul>
        <button
          aria-label="nextSlide"
          className={styles.navButton}
          onClick={nextSlideMobile}
          disabled={index >= projectsData.length - 1}
        >
          <ChevronRight
            className={styles.icon}
            style={{ transform: "translateX(3px)" }}
          />
        </button>
      </div>
    </>
  );
};

export default ProjectsMobile;
