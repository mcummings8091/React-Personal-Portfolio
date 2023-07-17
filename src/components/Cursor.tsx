import { styled } from "styled-components";

const StyledCursor = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  pointer-events: none;
  width: 350px;
  height: 350px;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  opacity: 40%;
  background: radial-gradient(
    circle at 50% 50%,
    rgba(148, 255, 130, 1) 0%,
    rgba(132, 247, 151, 1) 0%,
    rgba(253, 254, 255, 0.02) 52%
  );
`;

const Cursor = () => {
  return <StyledCursor id="cursor"></StyledCursor>;
};

export default Cursor;
