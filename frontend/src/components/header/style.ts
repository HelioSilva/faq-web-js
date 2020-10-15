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
  a {
    color: #fff;
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
    url("https://img2.goodfon.com/wallpaper/nbig/1/79/workgroup-teamwork-desk-office.jpg");
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
