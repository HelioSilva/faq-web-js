import styled from "styled-components";

export const Container = styled.div`
  cursor: pointer;
  width: 200px;
  height: 35px;
  background-color: #d9462d;
  border-radius: 5px;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 5px;
  transition-duration: 0.6;

  &:hover {
    background-color: #12f4aa;
  }

  p {
    font-size: 16px;
    color: #fff;
  }
`;
