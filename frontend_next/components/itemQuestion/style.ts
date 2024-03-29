import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  /* background-color: #f3f3f3; */
  border-radius: 12px;
  padding: 4px;

  > div {
    display: flex;

    > div {
      padding: 0px 16px;
    }
  }
`;

export const DivFlexRow = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 8px;

  span {
    color: #666666;
    font-weight: bold;
    font-size: 0.7rem;
  }
  p {
    font-size: 0.7rem;
  }
  p + p {
    padding-left: 24px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  /* color: #545454; */

  h2 {
  }
`;
