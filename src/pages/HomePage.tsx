import HeroPage from "@/pages/HeroPage";
import AboutPage from "@/pages/AboutPage";
import EducationPage from "@/pages/EducationPage";
import SkillsPage from "@/pages/SkillsPage";
import ProjectsPage from "@/pages/ProjectsPage";
import ProfilesPage from "@/pages/ProfilesPage";
import ContactPage from "@/pages/ContactPage";

const HomePage = () => {
  return (
    <>
      <section id="home">
        <HeroPage />
      </section>

      <section id="about">
        <AboutPage />
      </section>

      <section id="education">
        <EducationPage />
      </section>

      <section id="skills">
        <SkillsPage />
      </section>

      <section id="projects">
        <ProjectsPage />
      </section>

      <section id="profiles">
        <ProfilesPage />
      </section>

      <section id="contact">
        <ContactPage />
      </section>
    </>
  );
};

export default HomePage;
