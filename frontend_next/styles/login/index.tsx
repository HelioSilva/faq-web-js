import { Form } from "@unform/web";
import styled, { css } from "styled-components";
import AreaInput from "../../components/input/style";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export const Aside = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #c20b2e;
  padding: 10%;

  color: #fff;

  h2 {
    font-size: 50px;
  }

  p {
    opacity: 0.6;
    margin-top: 35px;
    text-align: center;
  }

  @media (max-width: 500px) {
    width: 100%;
    padding: 20px;
  }
`;

export const Content = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  > div {
    width: 90%;
    max-width: 450px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 80px 40px;
    box-shadow: 1px 1px 5px #eae8e8;
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  h2 {
    font-family: "Roboto" sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 75px;
    text-align: center;

    /* primaria */
    color: #c20b2e;
  }

  ${AreaInput} + ${AreaInput} {
    margin-top: 10px;
  }

  ${AreaInput} + button {
    margin-top: 10px;
  }

  @media (max-width: 700px) {
    width: 100%;
  }

  button {
    background-color: #c20b2e;
    border: none;
    padding: 10px 25px;
    border-radius: 25px;
    color: #fff;
  }

  hr {
    margin-top: 30px;
    color: #e5e5e5;
    opacity: 0.5;
  }

  p {
    margin-bottom: 10px;
  }
`;

interface props {
  hasMessage: boolean;
}
export const MensagemUser = styled.h5<props>`
  color: #e23807;
  transition: 2s;
  font-size: 12px;

  ${(props) => {
    return (
      props.hasMessage === false &&
      css`
        color: #fff;
      `
    );
  }}
`;
