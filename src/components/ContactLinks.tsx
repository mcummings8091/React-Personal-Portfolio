import { styled } from "styled-components";

const LinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;
  flex-wrap: wrap;
`;

const ContactLink = styled.a`
  text-decoration: none;
  color: lime;
  transition: transform 0.3s ease-out;

  &:hover {
    transform: translateY(-9px);
  }
`;

const StyledI = styled.i`
  color: lime;
`;

const ContactLinks = () => {
  return (
    <LinkContainer style={{ marginTop: "4rem" }}>
      <ContactLink href="https://github.com/mcummings8091">
        <StyledI
          className="bi bi-github"
          style={{ fontSize: "6.5rem" }}
          id="icon"
        ></StyledI>
      </ContactLink>
      <ContactLink href="https://www.linkedin.com/in/matthew-cummings-0b2b01240/">
        <StyledI
          className="bi bi-linkedin"
          style={{ fontSize: "6.5rem" }}
          id="icon"
        ></StyledI>
      </ContactLink>
    </LinkContainer>
  );
};

export default ContactLinks;
