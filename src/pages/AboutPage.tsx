import About from "../components/About";
import BodyStyle from "../components/StyleComponents/BodyContainer";
import PageContainer from "../components/StyleComponents/PageContainer";

const AboutPage = () => {
  return (
    <BodyStyle>
      <PageContainer>
        <About></About>
      </PageContainer>
    </BodyStyle>
  );
};

export default AboutPage;
