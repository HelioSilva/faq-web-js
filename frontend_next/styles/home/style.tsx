import styled from "styled-components";

export const BodyHome = styled.div`
  background-color: #fafafa;
  width: 70%;
  min-height: 80vh;

  margin: 0 auto;
  padding: 24px 12px;
  margin-bottom: 10vh;

  div + div {
    margin-top: 8px;
  }

  @media (max-width: 992px) {
    width: 80%;
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`;
