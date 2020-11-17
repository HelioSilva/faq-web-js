import * as S from "./style";

export enum ColorButtom {
  primary = "#007BFF",
  danger = "#DC3545",
}
export type propsBadge = {
  children: React.ReactNode;
  variant: ColorButtom;
  spacing?: Number;
  fun?: Function;
  disable?: boolean;
};

const Badge = ({ children, variant, spacing, fun, disable }: propsBadge) => {
  return (
    <S.Badge
      disabled={disable || false}
      variant={variant}
      spacing={spacing}
      onClick={() => {
        fun();
      }}
    >
      {children}
    </S.Badge>
  );
};

export default Badge;
