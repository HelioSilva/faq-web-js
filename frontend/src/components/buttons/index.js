import styled from "styled-components";

const ButtonFaq = styled.button`
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

  /* :hover {
    background: #a20d2b;
    color: #fff;
  } */


  &::before {
    content: '';
    position: absolute;
    opacity: 1;
    width: 100%;
    height:100%;
    background-color: #dd1c40;
    transform-origin: bottom left;
    transform: translateX(100%) scale(1.5) skew(-30deg);
    transition: transform 200ms linear;
  }
  
  &::after{
    content: "${(props) => props.children}";
    position: absolute;
    color: #fff;
  }

  &:hover::before{
    transform: translateX(-30%) scale(1.5) skew(-30deg);
  }


`;

export default ButtonFaq;
