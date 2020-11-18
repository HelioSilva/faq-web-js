import styled from "styled-components";

export const Container = styled.div`
  /* a {
    text-decoration: none;

    &:hover {
      color: #60c4be;
      transition: 0.6s;
    }
  } */
`;

export const DivRow = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 300px;

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
`;

export const Lista = styled.div`
  position: relative;
  display: inline-block;
  div {
    display: none;
    position: absolute;
    background-color: #f2f2f2;
    min-width: 100px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    padding: 12px 16px;
    z-index: 1;
    border-radius: 15px;

    a {
      color: #304946;
    }
  }
  :hover div {
    display: block;
  }
  :hover div:hover {
    background-color: #fcaa83;
  }
`;

export const ImageRaduis = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #930924;
  max-width: 30px;
  padding: 1px;
  border-radius: 20px;
  cursor: pointer;
  transition: 1s;

  img {
    width: 100%;
    border-radius: 20px;
  }
  :hover {
    background: #930924;
    img {
      /* width: 30px; */
    }
  }
`;

export const MenuInicial = styled.div`
  width: 100%;
  max-width: 900px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    color: #fff;
  }

  @media (max-width: 400px) {
    flex-direction: column;
    flex-wrap: wrap;
  }
`;

export const BGTopo = styled.div`
  background: #c20b2e;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px 5px 20px;
`;

export const BGImage = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1)),
    url("https://blog.diferencialti.com.br/wp-content/uploads/2017/01/entenda-o-que-e-service-desk-e-como-utilizalo-999x640.jpeg");
  height: 220px;
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
