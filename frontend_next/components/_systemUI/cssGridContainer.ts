import styled, { css } from "styled-components";
import { props } from "./gridContainer";

export const GridContainer = styled.div<props>`
  display: grid;
  grid-column-gap: ${(props) => props.spacing && `${props.spacing * 8}px`};
  grid-row-gap: ${(props) => props.spacing && `${props.spacing * 8}px`};

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

  ${(props) =>
    props.xl &&
    css`
      @media (min-width: 1200px) {
        grid-template-columns: repeat(${props.xl}, auto);
      }
    `};

  ${(props) =>
    props.lg &&
    css`
      @media (min-width: 992px) and (max-width: 1199.98px) {
        grid-template-columns: repeat(${props.lg}, auto);
      }
    `};

  ${(props) =>
    props.md &&
    css`
      @media (min-width: 768px) and (max-width: 991.98px) {
        grid-template-columns: repeat(${props.md}, auto);
      }
    `};

  ${(props) =>
    props.sm &&
    css`
      @media (min-width: 576px) and (max-width: 767.98px) {
        grid-template-columns: repeat(${props.sm}, auto);
      }
    `};

  ${(props) =>
    props.xs &&
    css`
      @media (max-width: 575.98px) {
        grid-template-columns: repeat(${props.xs}, auto);
      }
    `};
`;
