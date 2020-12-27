import * as S from "./cssGridContainer";
import React from "react";

export type props = {
  children: React.ReactNode;
  col: number;
  spacing: number;

  // system grids
  xs?: number; //extra small < 576px
  sm?: number; //small > 576px
  md?: number; //medium > 768px
  lg?: number; //large >992px
  xl?: number; //extra large >1200px
  // -----------

  width?: string;
  height?: string;

  style?: React.CSSProperties;
};

const GridContainer = ({ children, ...others }: props) => {
  return <S.GridContainer {...others}>{children}</S.GridContainer>;
};

export default GridContainer;
