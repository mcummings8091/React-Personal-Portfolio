import { styled } from "styled-components";

interface Props {
  img: string;
}

const StyledLogo = styled.img`
  width: 400px;
  height: 100%;
  margin-right: 0;
  filter: invert(53%) sepia(76%) saturate(2608%) hue-rotate(84deg)
    brightness(122%) contrast(121%);
  object-fit: contain;

  &:first-of-type {
    margin-top: 0;
  }
`;

const ProjectLangLogo = ({ img }: Props) => {
  return <StyledLogo src={img}></StyledLogo>;
};

export default ProjectLangLogo;
