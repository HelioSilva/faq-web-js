import styled, { css } from "styled-components";

interface props {
  focus: boolean;
  edited: boolean;
}

const colorBG = "#cfd8e7";
const colorBGActive = "#cacaca";
const delay = "0.7s";

const AreaInput = styled.div<props>`
  /* background: ${colorBG}; */
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

    border: none;
    color: #5d5d5d;
    /* background: ${colorBG}; */

    font-size: 13.5px;
    transition: ${delay};
  }

  ${(props) => {
    return (
      (props.focus || props.edited) &&
      css`
        /* background: ${colorBGActive}; */
        /* border: 1px solid #ff4f53; */

        input {
          /* background: ${colorBGActive}; */
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
