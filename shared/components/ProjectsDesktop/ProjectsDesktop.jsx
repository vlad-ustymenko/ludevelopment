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
import styles from "./ProjectsDesktop.module.css";

const ProjectsDesktop = () => {
  const [index, setIndex] = useState(0);
  const [dotIndex, setDotIndex] = useState(0);
  const slideRef = useRef(null);
  const cardRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (cardRef.current) {
      const gap = 16 * 5;
      const containerWidth = slideRef.current.offsetWidth - gap;
      const calculatedCardWidth = containerWidth / 6;
      setCardWidth(calculatedCardWidth);
    }
  }, []);

  useEffect(() => {
    if (slideRef.current && cardWidth > 0) {
      setTimeout(() => {
        slideRef.current.scrollBy({
          left: cardWidth + 16,
        });
      }, 500);
    }
  }, [cardWidth]);

  const prevSlide = useCallback(() => {
    if (index <= 0 || isAnimating) {
      return;
    }

    setIsAnimating(true);
    slideRef.current.scrollBy({
      left: -cardWidth - 16,
      behavior: "smooth",
    });

    setDotIndex((prevIndex) => prevIndex - 1);

    setTimeout(() => {
      setIndex((prevIndex) => prevIndex - 1);
      slideRef.current.scrollLeft = cardWidth + 16;
      setIsAnimating(false);
    }, 500);
  }, [index, isAnimating, cardWidth]);

  const nextSlide = useCallback(() => {
    if (index >= projectsData.length - 6 || isAnimating) {
      return;
    }
    setIsAnimating(true);
    slideRef.current.scrollBy({
      left: cardWidth + 16,
      behavior: "smooth",
    });

    setDotIndex((prevIndex) => prevIndex + 1);

    setTimeout(() => {
      setIndex((prevIndex) => prevIndex + 1);
      slideRef.current.scrollLeft = cardWidth + 16;
      setIsAnimating(false);
    }, 500);
  }, [index, isAnimating, cardWidth]);

  const dots = useMemo(() => {
    return Array.from({
      length: projectsData.length - 5,
    });
  }, []);
  return (
    <>
      <div className={styles.sliderContainer} ref={slideRef}>
        <>
          <div className={styles.projectsCard} style={{ minWidth: cardWidth }}>
            <Image
              fill
              sizes="17vw"
              src={projectsData[index > 0 ? index - 1 : 0].img}
              alt={projectsData[index].title}
            />
            <div className={styles.descriptionShadow}>
              <div className={styles.descriptionWrapper}>
                <p className={styles.title}>{projectsData[index].title}</p>
                <p className={styles.description}>
                  {projectsData[index].description}
                </p>
              </div>
            </div>
          </div>
          <div className={styles.projectsGallery}>
            {projectsData.slice(index, index + 6).map((project, idx) => (
              <div
                key={idx}
                ref={cardRef}
                className={styles.projectsCardGallery}
              >
                <Image
                  fill
                  sizes="100vw"
                  src={project.img}
                  alt={project.title}
                />
                <div className={styles.descriptionShadow}>
                  <div className={styles.descriptionWrapper}>
                    <p className={styles.title}>{project.title}</p>
                    <p className={styles.description}>{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.projectsCard} style={{ minWidth: cardWidth }}>
            <Image
              fill
              sizes="100vw"
              src={
                projectsData[index > 5 ? projectsData.length - 1 : index + 6]
                  .img
              }
              alt={projectsData[index].title}
            />
            <div className={styles.descriptionShadow}>
              <div className={styles.descriptionWrapper}>
                <p className={styles.title}>{projectsData[index].title}</p>
                <p className={styles.description}>
                  {projectsData[index].description}
                </p>
              </div>
            </div>
          </div>
        </>
      </div>
      <div className={styles.buttonsWrapper}>
        <button
          aria-label="prevSlide"
          className={styles.navButton}
          onClick={prevSlide}
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
          onClick={nextSlide}
          disabled={index >= projectsData.length - 6}
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

export default ProjectsDesktop;
