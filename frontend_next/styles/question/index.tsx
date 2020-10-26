import styled from "styled-components";
import ItemQuestion from "../../components/itemQuestion";

export const ContentQuestion = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 35px 0px;

  h2 {
    font-family: "roboto";
    font-weight: "300";
    font-size: 24px;
    color: #bb1c27;
    margin-bottom: 5px;
  }

  h5 {
    ::before {
      content: "Autor: ";
    }
    font-family: "roboto";
    font-size: 12px;
    color: #949494;
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

export const ItemAnswer = styled.div`
  margin-bottom: 30px;
  text-align: center;

  hr {
    width: 50%;
    margin: 15px 0px;
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
  padding: 5px 3px;

  p {
    font-size: 12px;
    flex-basis: 8;
  }
`;
