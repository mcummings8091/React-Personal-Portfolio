import { styled } from "styled-components";
import StyledHeader from "./StyleComponents/StyledHeader";
import ContactLinks from "./ContactLinks";

const FormContainer = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid lime;
  background: linear-gradient(
    0deg,
    rgba(128, 128, 128, 60%),
    rgba(128, 128, 128, 60%)
  );
  color: lime;
`;

const Textarea = styled.textarea`
  padding: 10px;
  border: 1px solid lime;
  background: linear-gradient(
    0deg,
    rgba(128, 128, 128, 60%),
    rgba(128, 128, 128, 60%)
  );
  color: lime;
  height: 500px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: dimgrey;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const ContactForm = () => {
  return (
    <>
      <FormContainer>
        <StyledHeader>Contact me</StyledHeader>
        <Form
          target="_blank"
          action="https://formsubmit.co/mcummings8091@gmail.com"
          method="POST"
        >
          <FormGroup>
            <Label>Name</Label>
            <Input type="text" />
          </FormGroup>
          <FormGroup>
            <Label>Email</Label>
            <Input type="email" />
          </FormGroup>
          <FormGroup>
            <Label>Message</Label>
            <Textarea />
          </FormGroup>
          <SubmitButton type="submit">Send Message</SubmitButton>
        </Form>
      </FormContainer>
      <ContactLinks></ContactLinks>
    </>
  );
};

export default ContactForm;
