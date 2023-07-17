import { styled } from "styled-components";

const StyledCard = styled.div`
  display: flex;
  width: 100%;
  margin-top: 2rem;
  border: solid 1px lime;
  box-shadow: 10px 10px black;
  background-image: linear-gradient(
    0deg,
    rgba(105, 105, 105, 60%),
    rgba(105, 105, 105, 60%)
  );

  &:first-of-type {
    margin-top: 0;
  }
`;

export default StyledCard;
