"use client";
import React, {
  useRef,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { useViewportWidthContext } from "@/context/ViewportWidthContext";
import styles from "./Projects.module.css";

const projectsData = [
  {
    img: "/images/projects/1.jpg",
    title: "2022 – 2023 Ходосівка",
    description: "Загальна площа – 300 м2",
  },
  {
    img: "/images/projects/2.jpg",
    title: "2020 – 2023 Гатне",
    description: "Загальна площа – 320 м2",
  },
  {
    img: "/images/projects/3.jpg",
    title: "2022 – 2025 Українка",
    description: "Загальна площа – 22 573 м2",
  },
  {
    img: "/images/projects/4.jpg",
    title: "2017 – 2019 Бровари",
    description: "Загальна площа – 800 м2",
  },
  {
    img: "/images/projects/5.jpg",
    title: "2020 – 2021 Крюківщина",
    description: "Загальна площа – 596 м2",
  },
  {
    img: "/images/projects/6.jpg",
    title: "2021 – 2022 Білогородка",
    description: "Загальна площа – 833 м2",
  },
  {
    img: "/images/projects/6.jpg",
    title: "2023 – 2024 Київ",
    description: "Загальна площа – 450 м2",
  },
  {
    img: "/images/projects/5.jpg",
    title: "2018 – 2019 Ірпінь",
    description: "Загальна площа – 700 м2",
  },
  {
    img: "/images/projects/4.jpg",
    title: "2019 – 2021 Буча",
    description: "Загальна площа – 580 м2",
  },
  {
    img: "/images/projects/3.jpg",
    title: "2021 – 2023 Васильків",
    description: "Загальна площа – 920 м2",
  },
  {
    img: "/images/projects/2.jpg",
    title: "2016 – 2018 Вишневе",
    description: "Загальна площа – 340 м2",
  },
  {
    img: "/images/projects/1.jpg",
    title: "2015 – 2017 Обухів",
    description: "Загальна площа – 630 м2",
  },
];

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
  }, [calculateCardWidth]);

  useEffect(() => {
    if (sliderRefFirst.current && cardWidth > 0) {
      setTimeout(() => {
        sliderRefFirst.current.scrollBy({
          left: cardWidth + 16,
          behavior: "smooth",
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
      // Свайп вліво
      nextSlideMobile();
    }

    if (touchEndX - touchStartX > 50) {
      // Свайп вправо
      prevSlideMobile();
    }
  };

  return (
    <section id="projects" className={styles.projects}>
      <SectionTitle
        title="Проекти"
        number="04"
        color="white"
        lineColor="var(--secondAccent)"
      />

      <div className={styles.sliderContainer} ref={sliderRefFirst}>
        {viewportWidth >= 1280 && (
          <>
            <div
              className={styles.projectsCard}
              style={{ minWidth: cardWidth }}
            >
              <img
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
                  <img src={project.img} alt={project.title} />
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
              <img
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
        )}
        {viewportWidth < 1280 && (
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
                <img src={project.img} alt={project.title} />
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
          className={styles.navButton}
          onClick={viewportWidth >= 1280 ? prevSlide : prevSlideMobile}
          disabled={index === 0}
        >
          <ChevronLeft width={30} height={30} />
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
          className={styles.navButton}
          onClick={viewportWidth >= 1280 ? nextSlide : nextSlideMobile}
          disabled={
            viewportWidth >= 1280
              ? index >= projectsData.length - 6
              : index >= projectsData.length - 1
          }
        >
          <ChevronRight
            width={30}
            height={30}
            style={{ transform: "translateX(3px)" }}
          />
        </button>
      </div>
    </section>
  );
};

export default Projects;
