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
  disable?: boolean;
};

const Badge = ({
  children,
  variant,
  light,
  spacing,
  fun,
  disable,
}: propsBadge) => {
  return (
    <S.Badge
      disabled={disable || false}
      variant={variant}
      spacing={spacing}
      light={light}
      onClick={() => {
        fun();
      }}
    >
      {children}
    </S.Badge>
  );
};

export default Badge;
