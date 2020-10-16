import React from "react";
import styled from "styled-components";

interface PropsBt {
  name: string;
  numero: number;
  cor: string;
}
interface Cor {
  background: string;
}
const Button = (Parametro: PropsBt) => (
  <>
    <Container background={Parametro.cor}>
      <p>{Parametro.name}</p>
      <h1>{Parametro.numero}</h1>
    </Container>
  </>
);

const Container = styled.button<Cor>`
  cursor: pointer;
  width: 200px;
  height: 35px;
  background-color: ${(props: Cor) => props.background};
  border-radius: 5px;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 5px;
  transition-duration: 0.6;

  &:hover {
    background-color: #12f4aa;
  }

  p {
    font-size: 16px;
    color: #fff;
  }
`;

export default Button;
