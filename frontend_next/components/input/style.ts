import styled, { css } from "styled-components";

interface props {
  focus: boolean;
  edited: boolean;
}

const delay = "0.7s";

const AreaInput = styled.div<props>`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-around;
  padding: 1px 5px;
  padding-top: 15px;
  height: 40px;
  width: 100%;
  /* border-radius: 8px; */
  border-bottom: 1px solid #635179;
  transition: ${delay};

  p {
    display: none;
    position: absolute;
    color: #939393;
    transition: ${"0.5s"};
  }

  input {
    width: 100%;
    height: 100%;
    background: none;

    border: none;
    color: #5d5d5d;

    font-size: 13.5px;
    transition: ${delay};
  }

  ${(props) => {
    return (
      (props.focus || props.edited) &&
      css`
        input {
        }
        p {
          display: block;
          bottom: 15px;
          font-size: 11px;
          color: #13708a;
        }
      `
    );
  }}
`;

export default AreaInput;
