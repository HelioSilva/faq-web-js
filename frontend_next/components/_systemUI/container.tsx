import * as S from "./cssContainer";

export type propsContainer = {
  children: React.ReactNode;

  flex?: boolean;
  row?: boolean;
  col?: boolean;
  order?: number;
  flexCenter?: boolean;
  pAside?: string;
  bgColor?: string;
  itemGrow?: number;
  spacing?: number;
  basis?: string;

  width?: string;
  height?: string;
};

const Container = ({ children, ...others }: propsContainer) => {
  return <S.Container {...others}>{children}</S.Container>;
};

export default Container;
