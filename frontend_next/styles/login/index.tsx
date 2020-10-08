import { Form } from "@unform/web";
import styled from "styled-components";
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
    border: 1px solid #eae8e8;
    padding: 80px 20px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  h2 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: lighter;
    font-size: 18px;
    line-height: 76px;
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

  @media (max-width: 500px) {
    width: 100%;
  }

  button {
    background-color: #c20b2e;
    border: none;
    padding: 10px 25px;
    border-radius: 25px;
    color: #fff;
  }
`;
