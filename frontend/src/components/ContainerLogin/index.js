import styled from "styled-components";

export const ContainerLogin = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  background: #f0f0f0;

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
`;
