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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #c20b2e;
  background-image: url("https://cdn.pixabay.com/photo/2015/01/08/18/24/children-593313_960_720.jpg");
  /* border-right: solid 15px #c20b2e;
  border-left: solid 15px #c20b2e; */
  background-repeat: no-repeat;
  background-position: center;
  padding: 10%;

  color: #fff;

  h2 {
    font-size: 50px;
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
  justify-content: center;
  align: center;
  border: 1px solid #dcd5d5;
  border-radius: 5px;
  padding: 200px;
  margin: 0;

  h1 {
    color: #c20b2e;
    font-size: 60px;
    margin-top: 1px;
  }
  a {
    text-decoration: none;
    color: #c20b2e;
    font-weight: bold;
    margin-left: auto;
    margin-right: auto;
  }
  div {
    width: 600px;
    input {
      display: flex;
      background: #ecf0f1;
      border-radius: 5px;
      margin-bottom: 20px;
      padding: 10px;
      padding-left: 10px;
      border-style: none;
      width: 100%;
      color: #737373;
      background: #172;
    }
  }

  @media (max-width: 800px) {
    width: 80%;
  }
`;
