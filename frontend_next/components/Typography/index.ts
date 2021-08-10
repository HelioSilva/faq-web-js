import styled from "styled-components";

export const Title_h1 = styled.h1`
  font-size: 1.5em;
  font-weight: 400;
  text-rendering: "optimizeLegibility";
  color: #666;
  /* font-size: 1.3em; */
  font-family: "Poppins";
  cursor: pointer;
  transition: 0.4s;

  :hover {
    color: #c41a44;
  }

  @media (max-width: 758px) {
    font-size: 1.3em;
  }

  @media (max-width: 608px) {
    font-size: 1.2em;
  }

  @media (max-width: 500px) {
    font-size: 1.1em;
  }
`;
