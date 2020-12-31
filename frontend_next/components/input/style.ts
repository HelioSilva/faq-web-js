import styled, { css } from "styled-components";

interface props {
  focus: boolean;
  edited: boolean;
}

const delay = "0.7s";

const AreaInput = styled.div<props>`
  position: relative;
  height: 30px;
  width: 100%;

  border-bottom: 1px solid #635179;
  transition: all ${delay};

  label,
  input {
    position: absolute;
    top: 0;
    left: 0;
  }

  label {
    color: #626062;
    transition: ${"0.5s"};
    pointer-events: none;
    font-size: 16px;
  }

  input {
    width: 100%;
    height: 35px;
    background: none;

    border: none;
    color: #5d5d5d;

    font-size: 14px;
  }

  input:focus ~ label {
    top: -10px;
    font-size: 12px;
    font-weight: 700;
    color: #c20b2e;
  }

  ${(props) => {
    return (
      props.edited &&
      css`
        label {
          top: -10px;
          font-size: 12px;
          font-weight: 700;
          color: #e95956;
        }
      `
    );
  }}
`;

export default AreaInput;
