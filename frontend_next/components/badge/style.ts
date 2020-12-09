import styled, { css } from "styled-components";
import { propsBadge } from ".";

export const Badge = styled.button<propsBadge>`
  * {
    font-size: 0.7rem;
    font-weight: 5 00;
    font-family: "roboto";
  }

  p {
    color: #fff;
  }

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  transition-duration: 0.5s;

  ${(propsBadge) =>
    propsBadge.width &&
    css`
      width: ${propsBadge.width};
    `};

  ${(propsBadge) =>
    propsBadge.height &&
    css`
      height: ${propsBadge.height};
    `};

  border: 0;

  background: ${(props) => props.variant};
  padding: 2px 3px;
  border-radius: 4px;

  ${({ light, variant }) =>
    light &&
    `
    background: none;
    border: 1px solid ${variant};
    p{
      color: #8a8a8a;
    }
  `}

  :hover {
    opacity: 0.8;
    rotate: 10;

    background: ${(props) => props.variant};
    * {
      color: #fff;
    }
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
