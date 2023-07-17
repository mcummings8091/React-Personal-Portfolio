import { styled } from "styled-components";

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
  padding: 0;
  height: 100vh;
  overflow-y: auto;
`;

export default BodyStyle;
