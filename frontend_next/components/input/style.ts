import styled, { css } from "styled-components";

interface props {
  focus: boolean;
  edited: boolean;
}

const colorBG = `#cfd8e7 `;
const colorBGActive = "#cacaca";
const delay = "0.7s";

const AreaInput = styled.div<props>`
  background: ${colorBG};
  padding: 10px;
  padding-top: 25px;
  border-radius: 8px;
  transition: ${delay};

  display: flex;
  flex-direction: row;
  align-items: center;

  input {
    width: 300px;
    border: none;
    color: #5d5d5d;
    background: ${colorBG};

    font-size: 16px;
    transition: ${delay};
    z-index: 1;
  }

  p {
    position: absolute;
    color: #939393;
    transition: ${"0.5s"};
    margin-right: 5px;
    z-index: 2;
  }

  ${(props) => {
    return (
      (props.focus || props.edited) &&
      css`
        background: ${colorBGActive};
        /* border: 1px solid #ff4f53; */

        label {
          font-size: 2px;
        }
        input {
          background: ${colorBGActive};
          position: relative;
          left: 0px;
        }
        p {
          position: relative;
          top: -20px;
          font-size: 11px;
        }
      `
    );
  }}
`;

export default AreaInput;
