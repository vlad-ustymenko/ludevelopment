import SectionTitle from "../SectionTitle/SectionTitle";
import ProjectsMobile from "../ProjectsMobile/ProjectsMobile";
import ProjectsDesktop from "../ProjectsDesktop/ProjectsDesktop";
import styles from "./Projects.module.css";

const Projects = () => {
  return (
    <section id="projects" className={styles.projects}>
      <SectionTitle title="Проекти" number="06" blackBG />
      <ProjectsDesktop />

      <ProjectsMobile />
    </section>
  );
};

export default Projects;
