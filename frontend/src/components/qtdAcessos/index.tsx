import React from "react";
import { ContainerQtd } from "./style";

const QtdAcessos = ({ ...props }) => (
  <>
    <ContainerQtd>
      <div>
        <h2>{props.notas}</h2>
        <p>Acesso</p>
      </div>
    </ContainerQtd>
  </>
);

export default QtdAcessos;
