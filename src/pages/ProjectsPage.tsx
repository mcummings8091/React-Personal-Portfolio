import BodyStyle from "../components/StyleComponents/BodyContainer";
import PageContainer from "../components/StyleComponents/PageContainer";
import Projects from "../components/Projects";
import OldProjects from "../components/OldProjects";
import Navbar from "../components/Navbar";
import Cursor from "../components/Cursor";

const ProjectsPage = () => {
  return (
    <>
      <Navbar></Navbar>
      <BodyStyle>
        <PageContainer>
          <Cursor></Cursor>
          <Projects></Projects>
          <OldProjects></OldProjects>
        </PageContainer>
      </BodyStyle>
    </>
  );
};

export default ProjectsPage;
