import styled from "styled-components";

const ButtonFaq = styled.a.attrs({ href: "http://debian.org" })`
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
`;

export default ButtonFaq;
