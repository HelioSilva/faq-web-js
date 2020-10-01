import React from "react";
import { ContainerQtd } from "./style";

const QtdAcessos = ({ ...props }) => (
  <>
    <ContainerQtd>
      <p>{props.notas}</p>
      <h2>Acessos</h2>
    </ContainerQtd>
  </>
);

export default QtdAcessos;
