import { Container, DivFlexRow, Content } from "./style";
import QtdAcesso from "../qtdAcesso/index";
import Link from "next/link";

import TimeAgo from "javascript-time-ago";

// Portugues BR
import pt from "javascript-time-ago/locale/pt";

interface Question {
  qtdAcesso: string;
  qtdRespostas: number;
  url: string;
  titulo: string;
  autor: string;
  autor_id: string;
  id: string;
}

const ItemQuestion = (props: Question) => {
  TimeAgo.addLocale(pt);
  const timeAgo = new TimeAgo("pt-PT");
  return (
    <Container>
      <div>
        <QtdAcesso qtd={props.qtdAcesso} />
        <Content>
          <div>
            <Link href={props.url}>
              <h2>{`${props.titulo}`}</h2>
            </Link>
            <p
              style={{
                color: "#999",
                fontSize: "11px",
              }}
            >
              <span>{props.qtdRespostas}</span>
              {props.qtdRespostas > 1 ? ` respostas  - ` : ` resposta  - `}
              Publicado:{" "}
              <span>{`${timeAgo.format(new Date(props.autor))}`}</span>
            </p>
          </div>
          {/* <DivFlexRow>
            <p>
              <span>{props.qtdRespostas}</span>
              {props.qtdRespostas > 1 ? ` respostas` : ` resposta`}
            </p>
            <p>
              Autor: <span>{props.autor}</span>
            </p>
          </DivFlexRow> */}
        </Content>
      </div>
    </Container>
  );
};

export default ItemQuestion;
