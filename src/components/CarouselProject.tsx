import { styled } from "styled-components";
import StyledHeader from "./StyleComponents/StyledHeader";
import StyledP from "./StyleComponents/StyledP";

interface Props {
  title: string;
  src: string;
}

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin-top: 2rem;
`;
const CardTop = styled.div`
  width: 100%;
`;

const CardBottom = styled.div`
  width: 100%;
`;

const CardImg = styled.img`
  width: 100%;
  height: 820px;
  object-fit: contain;
`;

const CarouselProject = ({ title, src }: Props) => {
  return (
    <StyledCard>
      <CardTop>
        <StyledHeader>{title}</StyledHeader>
        <StyledP>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
          Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc
          ut sem vitae risus tristique posuere.
        </StyledP>
      </CardTop>
      <CardBottom>
        <CardImg src={src} />
      </CardBottom>
    </StyledCard>
  );
};

export default CarouselProject;
