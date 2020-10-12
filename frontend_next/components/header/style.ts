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

export const DivRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 200px;
  a {
    color: #fff;
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fafafa;
    max-width: 30px;
    /* padding: 10px; */
    border-radius: 20px;
    cursor: pointer;
    transition: 1s;

    img {
      width: 30px;
      border-radius: 20px;
    }
    :hover {
      background: #2c2c2c;
      img {
        width: 40px;
      }
    }
  }
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
