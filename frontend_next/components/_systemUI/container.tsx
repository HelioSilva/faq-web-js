import * as S from "./cssContainer";
import React from "react";

export type propsContainer = {
  children: React.ReactNode;

  flex?: boolean;
  row?: boolean;
  col?: boolean;
  order?: number;
  flexCenter?: boolean;
  between?: boolean;
  padding?: number;
  pAside?: string;
  bgColor?: string;
  itemGrow?: number;
  spacing?: number;
  basis?: string;

  width?: string;
  height?: string;

  style?: React.CSSProperties;
};

const Container = ({ children, ...others }: propsContainer) => {
  return <S.Container {...others}>{children}</S.Container>;
};

export default Container;
