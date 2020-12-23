import styled, { css } from "styled-components";
import { propsContainer } from "./container";

export const Container = styled.div<propsContainer>`
  background: ${(props) => (props.bgColor ? props.bgColor : "none")};
  height: ${(props) => (props.height ? props.height : "auto")};
  order: ${(props) => (props.order ? props.order : 0)};

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
    props.flex === true &&
    css`
      display: flex;
    `};

  ${(props) =>
    props.flex === true &&
    props.col === true &&
    css`
      flex-direction: column;
    `};

  ${(props) =>
    props.flex === true &&
    props.row === true &&
    css`
      flex-direction: row;
    `};

  ${(props) =>
    props.flex === true &&
    props.itemGrow &&
    css`
      flex-grow: ${props.itemGrow};
    `};

  ${(props) =>
    props.flex === true &&
    props.basis &&
    css`
      flex-basis: ${props.basis};
    `};

  ${(props) =>
    props.flex === true &&
    props.wrap &&
    css`
      flex-wrap: wrap;
    `};

  ${(props) =>
    props.flex === true &&
    props.between &&
    css`
      justify-content: space-between;
      align-items: center;
    `};

  ${(props) =>
    props.flexCenter === true &&
    css`
      justify-content: center;
      align-items: center;
    `};

  ${(props) =>
    props.pAside !== "" &&
    css`
      padding: 0px ${props.pAside};
    `};

  ${(props) =>
    props.flex === true &&
    props.itemGrow &&
    css`
      flex-grow: ${props.itemGrow};
    `};

  ${(props) =>
    props.spacing &&
    css`
      margin: ${(props.spacing * 8) / 2}px ${props.spacing * 8}px;
    `};

  ${(props) =>
    props.padding &&
    css`
      padding: ${(props.padding * 8) / 2}px ${props.padding * 8}px;
    `};
`;
