import styled from "styled-components";

export const ContainerLogin = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  background: #fff;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export const Aside = styled.div`
  width: 40%;
  /* height:100% */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #c20b2e;
  padding: 10%;
  /* background-image: url("https://cdn.pixabay.com/photo/2015/01/08/18/24/children-593313_960_720.jpg");
  background-repeat: no-repeat;
  background-position: center; */

  color: #fff;

  h2 {
    font-size: 50px;
    align-items: center;
    margin: 0;
  }

  p {
    /* opacity: 0.6; */
    margin-top: 35px;
    text-align: center;
    font-size: 1rem;
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
`;

export const FormLogin = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  border: 1px solid #dcd5d5;
  border-radius: 5px;
  padding: 10px;
  margin: 0;
  width: 70%;

  hr {
    margin: 35px;
  }

  h1 {
    color: #c20b2e;
    font-size: 60px;
    text-align: center;
    margin-top: 0px;
    margin: 55px;
  }
  div {
    width: 80%;

    input {
      /* display: flex; */
      background: #ecf0f1;
      border-radius: 15px;
      margin-bottom: 20px;
      padding: 18px;
      border-style: none;
      align-items: center;
      width: 90%;

      color: #737373;
    }
  }

  @media (max-width: 800px) {
    width: 80%;
  }
  a {
    text-decoration: none;

    color: #c20b2e;
    font-weight: bold;
    margin-left: auto;
    margin-right: auto;
  }
`;
