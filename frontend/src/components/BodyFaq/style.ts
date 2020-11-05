import styled from "styled-components";

export const Container = styled.div`
  a {
    text-decoration: none;
    &:hover {
      font-size: 14.2px;
      transition: 0.6s;
    }
  }
`;

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

export const BGImage = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1)),
    url("https://cdn.pixabay.com/photo/2012/03/04/00/43/architecture-22039_960_720.jpg");
  /* background-repeat: no-repeat;
  -webkit-background-size: cover; */
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    display: flex;
    width: 600px;
    height: 38px;
    background: #fff;
    border-radius: 5px;
    margin-bottom: 20px;
    padding: 5px;
    padding-left: 10px;

    input {
      border-style: none;
      width: 100%;
      color: #737373;
    }

    @media (max-width: 800px) {
      width: 80%;
    }
  }
  a {
    width: 214px;
    height: 35px;
    border-radius: 10px;
    background: #c20b2e;
    color: #fff;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: 1s;

    :hover {
      background: #9d0926;
    }
  }
`;
