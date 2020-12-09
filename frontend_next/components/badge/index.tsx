import * as S from "./style";

export enum ColorButtom {
  primary = "#007BFF",
  danger = "#DC3545",
  add = "#349421",
}
export type propsBadge = {
  children: React.ReactNode;
  variant: ColorButtom;
  light?: Boolean;
  spacing?: Number;
  fun?: Function;
  disabled?: boolean;
  width?: string;
  height?: string;
};

const Badge = ({ children, fun, ...others }: propsBadge) => {
  return (
    <S.Badge
      onClick={() => {
        fun();
      }}
      {...others}
    >
      {children}
    </S.Badge>
  );
};

export default Badge;
