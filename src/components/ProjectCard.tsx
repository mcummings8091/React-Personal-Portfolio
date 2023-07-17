import { styled } from "styled-components";
import DarkButton from "./DarkButton";
import ProjectLangLogo from "./ProjectLangLogo";

interface Props {
  description: string;
  title: string;
  img: string;
  langimg: string;
  items: string[];
}

const StyledCard = styled.div`
  display: flex;
  width: 100%;
  margin-top: 2rem;
  border: solid 1px lime;
  box-shadow: 10px 10px black;
  background-image: linear-gradient(
    0deg,
    rgba(105, 105, 105, 60%),
    rgba(105, 105, 105, 60%)
  );

  &:first-of-type {
    margin-top: 0;
  }
`;

const CardLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 50%;
  padding: 10px;
`;

const CardMiddle = styled.div`
  width: 50%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  alight: ite;
`;

const CardRight = styled.div`
  display: flex;
  justify-content: center;
  border-left: 3px solid lime;
`;

const ProjectImage = styled.img`
  width: 100%;
  object-fit: fill;
  height: 400px;
  margin-bottom: 1rem;
`;

const SkillList = styled.ul`
  display: grid;
  align-items: stretch;
  align-content: stretch;
  justify-content: stretch;
  justify-items: stretch;
  grid-template-columns: auto auto;
`;

const ProjectCard = ({ description, title, img, langimg, items }: Props) => {
  return (
    <StyledCard>
      <CardLeft>
        <ProjectImage src={img} alt="placeholder"></ProjectImage>
        <DarkButton onClick={() => console.log("clicked")}>Link</DarkButton>
      </CardLeft>
      <CardMiddle>
        <h1>{title}</h1>
        <p>{description}</p>
        <h3>Stack</h3>
        <SkillList>
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </SkillList>
      </CardMiddle>
      <CardRight>
        <ProjectLangLogo img={langimg} />
      </CardRight>
    </StyledCard>
  );
};

export default ProjectCard;
