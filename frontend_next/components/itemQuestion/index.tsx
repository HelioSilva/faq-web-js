import { Container, DivFlexRow, Content } from "./style";
import QtdAcesso from "../qtdAcesso/index";
import Link from "next/link";

interface Question {
  qtdAcesso: string;
  qtdRespostas: string;
  url: string;
  titulo: string;
  autor: string;
}

const ItemQuestion = (props: Question) => (
  <Container>
    <div>
      <QtdAcesso qtd={props.qtdAcesso} />
      <Content>
        <div>
          <Link href={props.url}>
            <h2>{props.titulo}</h2>
          </Link>
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
      <p>Componente de Estrela</p>
    </div>
  </Container>
);

export default ItemQuestion;
