import styled from "styled-components";

export const BGTopo = styled.div`
  background: #c20b2e;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px 5px 20px;
`;

export const MenuInicial = styled.div`
  width: 100%;
  max-width: 900px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3,
  h5 {
    color: #fff;
  }
`;

export const DivRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 200px;
  /* a {
    color: #fff;
  } */

  a {
    position: relative;
    color: #fff;
    text-decoration: none;
  }

  a:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: 0;
    left: 0;
    background-color: #fff;
    visibility: hidden;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transition: all 0.3s ease-in-out 0s;
    transition: all 0.3s ease-in-out 0s;
  }
  a:hover:before {
    visibility: visible;
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35px;
    height: 35px;
    background: #bbbbfa;
    padding: 2px;
    border-radius: 25px;
    cursor: pointer;
    transition: 1s;

    img {
      width: 100%;
      border-radius: 100%;
    }

    p {
      color: #000;
      font-weight: bold;
      /* background: green; */
    }
    :hover {
      background: #2c2c2c;
      p {
        color: #fff;
      }
    }
  }
`;
