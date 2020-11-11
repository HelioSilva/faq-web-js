import styled from "styled-components";

const ButtonFaq = styled.button.attrs({ href: "http://debian.org" })`
  display:flex;
  position:relative;
  overflow: hidden;
  
  height: 55px;
  width: 214px;
  border-radius: 27px;
  background: #c20b2e;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: 1s;

  :hover {
    background: #9d0926;
    color: #fff;
  }


  &::before {
    content: '';
    position: absolute;
    opacity: 1;
    width: 100%;
    height:100%;
    background-color: blue;
    transform-origin: bottom left;
    transform: translateX(100%) scale(1.5) skew(-30deg);
    transition: transform 200ms linear;
  }
  &::after{
    content: "${(props) => props.children}";
    position: absolute;
  }
  
  &:hover::before{
    transform: translateX(-30%) scale(1.5) skew(-30deg);
  }


`;

export default ButtonFaq;
