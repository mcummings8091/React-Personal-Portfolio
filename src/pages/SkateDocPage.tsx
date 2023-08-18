import CarouselProject from "../components/CarouselProject";
import Cursor from "../components/Cursor";

import Navbar from "../components/Navbar";
import BodyStyle from "../components/StyleComponents/BodyContainer";
import PageContainer from "../components/StyleComponents/PageContainer";

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
            link="/project1"
          ></CarouselProject>
        </PageContainer>
      </BodyStyle>
    </>
  );
};

export default SkateDocPage;

/*

const ContactPage = () => {
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

*/
