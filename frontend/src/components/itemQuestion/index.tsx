import React from "react";
import { Container, Content, DivFlexRow } from "./style";
import QtdAcessos from "../qtdAcessos/index";

// interface Referencia {
//   qtdAcesso: string;
//   qtdRespostas: string;
//   url: string;
//   titulo: string;
//   autor: string;
// }

const QuestionBox = ({ ...props }) => (
  <Container>
    <div>
      <QtdAcessos notas={props.qtdAcessos} />
      <Content>
        <div>
          <a href={props.url}>
            <h2>{props.titulos}</h2>
          </a>
        </div>
        <DivFlexRow>
          <p>
            <span>{props.qtdRespostas}</span> respostas
          </p>
          <p>
            Autor: <span>{props.autor}</span>
          </p>
        </DivFlexRow>
      </Content>
    </div>
    <div>
      <p>* * * * *</p>
    </div>
  </Container>
);

export default QuestionBox;
