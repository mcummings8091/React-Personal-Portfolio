import { styled } from "styled-components";
import StyledHeader from "./StyleComponents/StyledHeader";

const AboutStyled = styled.div`
  background-image: linear-gradient(
    0deg,
    rgba(105, 105, 105, 60%),
    rgba(105, 105, 105, 60%)
  );
  margin-top: 2rem;
  box-shadow: 10px 10px black;
  border: solid 1px lime;
  padding: 10px;
`;

const About = () => {
  return (
    <>
      <StyledHeader>About</StyledHeader>
      <AboutStyled>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          I also recently launched a course that covers everything you need to
          build a web app with a spotify API using Node.js and React
        </p>
        <p>Here are a few technologies I've been working with lately</p>
        <ul
          style={{
            display: "grid",
            gap: "16px",
            alignItems: "stretch",
            alignContent: "stretch",
            justifyContent: "stretch",
            justifyItems: "stretch",
            gridTemplateColumns: "auto auto",
          }}
        >
          <li>JavaScript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Node.Js</li>
          <li>React</li>
          <li>Angular</li>
          <li>Webflow</li>
          <li>Python</li>
          <li>Django</li>
        </ul>
      </AboutStyled>
    </>
  );
};

export default About;
