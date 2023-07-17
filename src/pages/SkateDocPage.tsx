import CarouselProject from "../components/CarouselProject";
import Cursor from "../components/Cursor";

import Navbar from "../components/Navbar";
import BodyStyle from "../components/StyleComponents/BodyContainer";
import PageContainer from "../components/StyleComponents/PageContainer";
import StyledHeader from "../components/StyleComponents/StyledHeader";

import { styled } from "styled-components";

const ProjectImage = styled.img`
  width: 100%;
  height" 1080px;
`;

const SkateDocPage = () => {
  return (
    <>
      <Navbar></Navbar>
      <BodyStyle>
        <PageContainer>
          <Cursor></Cursor>
          <CarouselProject
            title="Skateboarding Documentation new"
            src="images/skatedoc.png"
          ></CarouselProject>
        </PageContainer>
      </BodyStyle>
    </>
  );
};

export default SkateDocPage;
