import styled, { css } from "styled-components";

interface a {
  focus: boolean;
}

const colorBG = "#ecf0f1";
const colorBGActive = "#ffaa33";

const delay = "0.7s";

const AreaInput = styled.div<a>`
  background: ${colorBG};
  padding: 10px;
  padding-top: 25px;
  border-radius: 8px;

  background: #7c60c8;
  display: flex;
  flex-direction: column;

  transition: ${delay};

  input {
    width: 300px;
    border: none;
    color: #7c6d6d;
    background: ${colorBG};

    font-size: 16px;
    transition: ${delay};
  }

  ${(props) =>
    props.focus &&
    css`
      background: ${colorBGActive};

      label {
        font-size: 8px;
      }
      input {
        background: ${colorBGActive};
      }
    `}
`;

export default AreaInput;
