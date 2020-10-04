import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  background-color: #f3f3f3;
  border-radius: 10px;
  padding: 10px;

  > div {
    display: flex;
    > div {
      padding: 0px 20px 0px 20px;
    }
  }
`;

export const DivFlexRow = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 0.2rem;
  span {
    color: #666666;
    font-weight: bold;
    font-size: 0.9rem;
  }
  p {
    font-size: 0.8rem;
  }
  p + p {
    padding-left: 15px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  color: #545454;

  h2 {
    color: #4996ce;
    font-size: 1.3rem;
    font-weight: 300;
    font-family: "Arial";
    cursor: pointer;
    transition: 0.8s;
  }
  h2:hover {
    font-size: 1.32rem;
  }
`;
