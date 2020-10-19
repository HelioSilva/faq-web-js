import styled from "styled-components";

export const ContentQuestion = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #efefef;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 5px 10px;

  h2 {
    font-family: "popins";
    font-size: 22px;
    color: #626262;
    margin-bottom: 5px;
  }

  h5 {
    ::before {
      content: "Autor: ";
    }
    font-family: "roboto";
    font-size: 14px;
    color: #949494;
    margin-bottom: 5px;
  }

  p {
    ::after {
      content: " Respostas";
    }
    font-family: "roboto";
    font-size: 12px;
    color: #a8a8a8;
  }
`;

const ItemAnswer = styled.div``;
