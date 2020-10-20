import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 1000px;
  background-color: #f0f0f0;
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
    color: #143b43;
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
  color: BLACK;

  h2 {
    color: green;
    font-size: 1.3rem;
    font-weight: 300;
    font-family: "Arial";
    cursor: pointer;
    transition: 0.8s;
  }
  h2:hover {
    color: cyan;
  }

  a:link {
    text-decoration: none;
  }

  a:visited {
    text-decoration: none;
  }

  a:hover {
    text-decoration: none;
  }

  a:active {
    text-decoration: none;
  }
`;
