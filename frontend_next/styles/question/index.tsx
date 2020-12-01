import styled from "styled-components";

export const ContentQuestion = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 32px 0px;

  h1 {
    font-family: "Segoe UI", "Roboto", "Noto Sans", "Ubuntu", "Droid Sans",
      "Helvetica Neue", sans-serif;

    font-size: 28px;
    font-weight: normal;
    margin: 0px;
    word-break: break-word;
    overflow-wrap: break-word;
    min-height: 35px;
    line-height: 35px;
    padding-top: 5px;
    color: rgb(150, 23, 23);
  }

  h5 {
    ::before {
      content: "Criado por: ";
    }
    font-family: "Segoe UI", "Roboto", "Noto Sans", "Ubuntu", "Droid Sans",
      "Helvetica Neue", sans-serif;
    font-size: 12px;
    line-height: 1.5;
    color: rgb(150, 23, 23);
  }

  p {
    ::after {
      content: " Respostas";
    }
    font-family: "Segoe UI", "Roboto", "Noto Sans", "Ubuntu", "Droid Sans",
      "Helvetica Neue", sans-serif;
    font-size: 12px;
    line-height: 1.5;
    color: rgb(150, 23, 23);
  }
`;

export const ItemAnswer = styled.div`
  margin-bottom: 28px;
  text-align: center;

  hr {
    width: 50%;
    margin: 14px 0px;
    background: #e0e0e0;
    color: #e4e4e4;
  }

  after div {
    margin-bottom: 200px;
  }
`;

export const HeaderItemAnswer = styled.div`
  display: flex;
  justify-content: space-between;
  background: #938c8f;
  color: #fff;
  padding: 8px 4px;

  p {
    font-size: 12px;
    flex-basis: 8;
  }
`;
