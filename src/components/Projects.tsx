import ProjectCard from "./ProjectCard";
import { styled } from "styled-components";
import StyledHeader from "./StyleComponents/StyledHeader";

const SectionContainer = styled.div`
  display: flex;
  margin-top: 2rem;
`;

const ProjectContainer = styled.div`
  align-items: center;
`;

const Projects = () => {
  return (
    <>
      <StyledHeader>Featured Projects</StyledHeader>
      <SectionContainer>
        <ProjectContainer>
          <ProjectCard
            img="images/portfoliothumbnail.png"
            langimg="images/typescript.svg"
            title="Personal Portfolio"
            items={[
              "Typescript",
              "HTML",
              "CSS",
              "React",
              "Styled-Components",
              "Vite",
              "FormSubmit",
            ]}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
          ></ProjectCard>
          <ProjectCard
            img="images/project-placeholder.png"
            langimg="images/javascript.svg"
            title="Template Screenshotter"
            items={["Javascript", "Node.js", "Puppeteer", "xml2js"]}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
          ></ProjectCard>
          <ProjectCard
            img="images/project-placeholder.png"
            langimg="images\python-svgrepo-com (1).png"
            title="Python Webscraper"
            items={["Python", "BeautifulSoup4", "Django", "HTML", "CSS"]}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
          ></ProjectCard>
        </ProjectContainer>
      </SectionContainer>
    </>
  );
};

export default Projects;
