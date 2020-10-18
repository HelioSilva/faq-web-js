import styled from "styled-components";

const LinkFaq = styled.a.attrs({ href: "/" })`
  /* font-size: 30px;
  font-weight: bold;
  cursor: pointer;
  text-decoration: underline overline;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 10px;
  &:hover {
    background-color: #12f4aa;
    text-decoration: underline;
    color: #0f0;
  } */
  position: relative;
  color: #000;
  text-decoration: none;

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 3px;
    bottom: 0;
    left: 0;
    background-color: #000;
    visibility: hidden;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transition: all 0.3s ease-in-out 0s;
    transition: all 0.3s ease-in-out 0s;
  }
  &:hover:before {
    visibility: visible;
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }
`;

export default LinkFaq;
