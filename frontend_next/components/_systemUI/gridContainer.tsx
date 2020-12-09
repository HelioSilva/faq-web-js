import * as S from "./cssGridContainer";
import React from "react";

export type props = {
  children: React.ReactNode;
  col: number;
  spacing: number;

  width?: string;
  height?: string;

  style?: React.CSSProperties;
};

const GridContainer = ({ children, ...others }: props) => {
  return <S.GridContainer {...others}>{children}</S.GridContainer>;
};

export default GridContainer;
