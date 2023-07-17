import { styled } from "styled-components";
import Alert from "../components/Alert";
import DarkButton from "../components/DarkButton";
import { useState } from "react";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Projects from "../components/Projects";
import Cursor from "../components/Cursor";
import ContactForm from "../components/ContactForm";

const AppContainer = styled.div`
  width: 80%;
  max-width: 90rem;
  margin: 0 auto;
  color: lime;
  font-family: "Courier New", "Lucida Console", monospace;
`;

const BodyStyle = styled.div`
  background-color: gray;
  background-image: linear-gradient(
      0deg,
      rgba(128, 128, 128, 15%),
      rgba(128, 128, 128, 15%)
    ),
    url("images/background.gif");
  background-size: cover;
  background-repeat: repeat;
  background-size: 100%;
  magrin: 0;
  padding: 0;
  height: 100vh;
  overflow-y: auto;
`;

function HomePage() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <>
      <Navbar></Navbar>
      <BodyStyle>
        <AppContainer>
          <Cursor></Cursor>
          {alertVisible && (
            <Alert onClick={() => setAlertVisibility(false)}>
              <span style={{ color: "red" }}>Red Pill</span> or{" "}
              <span style={{ color: "blue" }}>Blue pill</span>?
            </Alert>
          )}
          <About></About>
          <Projects></Projects>
          <ContactForm></ContactForm>
          <DarkButton color="dark" onClick={() => setAlertVisibility(true)}>
            The Question
          </DarkButton>
        </AppContainer>
      </BodyStyle>
    </>
  );
}

export default HomePage;
