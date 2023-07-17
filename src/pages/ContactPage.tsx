import PageContainer from "../components/StyleComponents/PageContainer";
import ContactForm from "../components/ContactForm";
import BodyStyle from "../components/StyleComponents/BodyContainer";
import Navbar from "../components/Navbar";
import Cursor from "../components/Cursor";

const ContactPage = () => {
  return (
    <>
      <Navbar></Navbar>
      <BodyStyle>
        <PageContainer>
          <Cursor></Cursor>
          <ContactForm></ContactForm>
        </PageContainer>
      </BodyStyle>
    </>
  );
};

export default ContactPage;
