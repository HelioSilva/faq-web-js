import { Container, DivFlexRow, Content } from "./style";
import QtdAcesso from "../qtdAcesso/index";
import Link from "next/link";

interface Question {
  qtdAcesso: string;
  url: string;
}

const ItemQuestion = (props: Question) => (
  <Container>
    <div>
      <QtdAcesso qtd={props.qtdAcesso} />
      <Content>
        <div>
          <Link href={props.url}>
            <h2>COMO FAZER AQUILO</h2>
          </Link>
        </div>
        <DivFlexRow>
          <p>
            <span>2</span> respostas
          </p>
          <p>
            Autor: <span>Helio Silva</span>
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
