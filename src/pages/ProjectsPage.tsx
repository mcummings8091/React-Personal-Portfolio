import BodyStyle from "../components/StyleComponents/BodyContainer";
import PageContainer from "../components/StyleComponents/PageContainer";
import Projects from "../components/Projects";
import OldProjects from "../components/OldProjects";
import Navbar from "../components/Navbar";
import Cursor from "../components/Cursor";
import DarkButton from "../components/DarkButton";
import { Link } from "react-router-dom";

const ProjectsPage = () => {
  return (
    <>
      <Navbar></Navbar>
      <BodyStyle>
        <PageContainer>
          <Cursor></Cursor>
          <Projects></Projects>
          <OldProjects></OldProjects>
          <DarkButton onClick={() => console.log("clicked")}>
            <Link to="/projects/project1">link</Link>
          </DarkButton>
        </PageContainer>
      </BodyStyle>
    </>
  );
};

export default ProjectsPage;
