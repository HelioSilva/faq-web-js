import styled from "styled-components";
import { propsBadge } from ".";

export const Badge = styled.button<propsBadge>`
  * {
    color: #fff;
    font-size: 0.7rem;
    font-weight: 5 00;
    font-family: "roboto";
  }
  width: 56px;
  border: 0;

  background: ${(props) => props.variant};
  padding: 4px;
  border-radius: 4px;

  :hover {
    opacity: 0.8;
    rotate: 10;
  }

  ${({ disabled }) =>
    disabled &&
    `
    opacity: 0.3;
    cursor: not-allowed;

    :hover{
      opacity: 0.3;
    }
  `}
`;
