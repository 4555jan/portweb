import styles from './ProjectsStyles.module.css';
import expense from '../../assets/expenses.png';
import digital from '../../assets/digital-marketing.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>

        <ProjectCard
          src={digital}
          link="https://github.com/4555jan/the-walls-project1"
          h3="the walls"
          p="its a social media app"
        />

        <ProjectCard
          src={expense}
          link="https://github.com/4555jan/expense-traker"
          h3="expense traker"

        />
      </div>
    </section>
  );
}

export default Projects;
