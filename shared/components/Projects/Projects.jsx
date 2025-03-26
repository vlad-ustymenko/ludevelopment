"use client";
import React, {
  useRef,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import Image from "next/image";
import SectionTitle from "../SectionTitle/SectionTitle";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { useViewportWidthContext } from "@/context/ViewportWidthContext";
import projectsData from "@/assets/projectData/projects.json";
import styles from "./Projects.module.css";

const Projects = () => {
  const { viewportWidth } = useViewportWidthContext();
  const [index, setIndex] = useState(0);
  const [dotIndex, setDotIndex] = useState(0);
  const sliderRefFirst = useRef(null);
  const cardRef = useRef(null);
  const cardMobileRef = useRef(null);
  const [cardMobileWidth, setCardMobileWidth] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  const calculateCardWidth = useCallback(() => {
    if (viewportWidth >= 1280 && cardRef.current) {
      const gap = 16 * 5;
      const containerWidth = sliderRefFirst.current.offsetWidth - gap;
      const calculatedCardWidth = containerWidth / 6;
      setCardWidth(calculatedCardWidth);
    } else if (cardMobileRef.current) {
      setCardMobileWidth(cardMobileRef.current.offsetWidth);
    }
  }, [viewportWidth]);

  useEffect(() => {
    calculateCardWidth();
  }, [viewportWidth]);

  useEffect(() => {
    if (sliderRefFirst.current && cardWidth > 0 && viewportWidth >= 1280) {
      setTimeout(() => {
        sliderRefFirst.current.scrollBy({
          left: cardWidth + 16,
        });
      }, 500);
    }
  }, [cardWidth]);

  const nextSlide = useCallback(() => {
    if (index >= projectsData.length - 6 || isAnimating) {
      return;
    }
    setIsAnimating(true);
    sliderRefFirst.current.scrollBy({
      left: cardWidth + 16,
      behavior: "smooth",
    });

    setDotIndex((prevIndex) => prevIndex + 1);

    setTimeout(() => {
      setIndex((prevIndex) => prevIndex + 1);
      sliderRefFirst.current.scrollLeft = cardWidth + 16;
      setIsAnimating(false);
    }, 500);
  }, [index, isAnimating, cardWidth]);

  const nextSlideMobile = useCallback(() => {
    if (index >= projectsData.length - 1 || isAnimating) {
      return;
    }
    setIsAnimating(true);
    sliderRefFirst.current.scrollBy({
      left: cardMobileWidth + 16,
      behavior: "smooth",
    });

    setDotIndex((prevIndex) => prevIndex + 1);

    setTimeout(() => {
      setIndex((prevIndex) => prevIndex + 1);
      setIsAnimating(false);
    }, 500);
  }, [index, isAnimating, cardMobileWidth]);

  const prevSlide = useCallback(() => {
    if (index <= 0 || isAnimating) {
      return;
    }

    setIsAnimating(true);
    sliderRefFirst.current.scrollBy({
      left: -cardWidth - 16,
      behavior: "smooth",
    });

    setDotIndex((prevIndex) => prevIndex - 1);

    setTimeout(() => {
      setIndex((prevIndex) => prevIndex - 1);
      sliderRefFirst.current.scrollLeft = cardWidth + 16;
      setIsAnimating(false);
    }, 500);
  }, [index, isAnimating, cardWidth]);

  const prevSlideMobile = useCallback(() => {
    if (index <= 0 || isAnimating) {
      return;
    }

    setIsAnimating(true);
    sliderRefFirst.current.scrollBy({
      left: -cardMobileWidth - 16,
      behavior: "smooth",
    });

    setDotIndex((prevIndex) => prevIndex - 1);

    setTimeout(() => {
      setIndex((prevIndex) => prevIndex - 1);
      setIsAnimating(false);
    }, 500);
  }, [index, isAnimating, cardMobileWidth]);

  const dots = useMemo(() => {
    return Array.from({
      length:
        viewportWidth >= 1280 ? projectsData.length - 5 : projectsData.length,
    });
  }, [viewportWidth]);

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

  return (
    <section id="projects" className={styles.projects}>
      <SectionTitle
        title="Проекти"
        number="06"
        color="white"
        lineColor="var(--secondAccent)"
      />

      <div className={styles.sliderContainer} ref={sliderRefFirst}>
        {viewportWidth >= 1280 ? (
          <>
            <div
              className={styles.projectsCard}
              style={{ minWidth: cardWidth }}
            >
              <Image
                fill
                sizes="100%"
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
                    sizes="100%"
                    src={project.img}
                    alt={project.title}
                  />
                  <div className={styles.descriptionShadow}>
                    <div className={styles.descriptionWrapper}>
                      <p className={styles.title}>{project.title}</p>
                      <p className={styles.description}>
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div
              className={styles.projectsCard}
              style={{ minWidth: cardWidth }}
            >
              <Image
                fill
                sizes="100%"
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
        ) : (
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
                  sizes="100%"
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
        )}
      </div>

      <div className={styles.buttonsWrapper}>
        <button
          aria-label="prevSlide"
          className={styles.navButton}
          onClick={viewportWidth >= 1280 ? prevSlide : prevSlideMobile}
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
          onClick={viewportWidth >= 1280 ? nextSlide : nextSlideMobile}
          disabled={
            viewportWidth >= 1280
              ? index >= projectsData.length - 6
              : index >= projectsData.length - 1
          }
        >
          <ChevronRight
            className={styles.icon}
            style={{ transform: "translateX(3px)" }}
          />
        </button>
      </div>
    </section>
  );
};

export default Projects;
