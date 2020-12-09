import styled, { css } from "styled-components";
import { props } from "./gridContainer";

export const GridContainer = styled.div<props>`
  display: grid;
  grid-column-gap: ${(props) => props.spacing && `${props.spacing * 8}px`};

  ${(props) =>
    props.width &&
    css`
      width: ${props.width};
    `};

  ${(props) =>
    props.height &&
    css`
      height: ${props.height};
    `};

  ${(props) =>
    props.col &&
    css`
      grid-template-columns: repeat(${props.col}, auto);
    `};
`;
