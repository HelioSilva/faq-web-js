import { Container, DivFlexRow, Content } from "./style";
import QtdAcesso from "../qtdAcesso/index";
import Link from "next/link";

import TimeAgo from "javascript-time-ago";

// Portugues BR
import pt from "javascript-time-ago/locale/pt";
import { Title_h1 } from "../Typography";

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
      <div style={{ display: "flex", alignItems: "center" }}>
        <QtdAcesso qtd={props.qtdAcesso} />
        <Content>
          <div>
            <Link href={props.url}>
              <Title_h1>{`${props.titulo}`}</Title_h1>
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
        </Content>
      </div>
    </Container>
  );
};

export default ItemQuestion;
