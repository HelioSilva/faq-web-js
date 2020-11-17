import styled from "styled-components";
import { propsBadge } from ".";

export const Badge = styled.button<propsBadge>`
  * {
    color: #fff;
    font-size: 0.9rem;
    font-weight: 200;
    font-family: "roboto";
  }

  border: 0;

  background: ${(props) => props.variant};
  padding: 2px 5px;
  border-radius: 5px;

  :hover {
    opacity: 0.8;
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
