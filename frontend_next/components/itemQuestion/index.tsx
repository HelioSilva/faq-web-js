import { Container, DivFlexRow, Content } from "./style";
import QtdAcesso from "../qtdAcesso/index";
import Link from "next/link";
import Badge, { ColorButtom } from "../badge/index";
import { MdCreate, MdDelete } from "react-icons/md";
import { useRouter } from "next/router";
import { useAuth } from "../../context/AuthContext";

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
  const { id } = useAuth();
  const route = useRouter();
  const handleEdite = (path: string) => {
    route.push(path);
  };
  return (
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
              <span>{props.qtdRespostas}</span>
              {props.qtdRespostas > 1 ? ` respostas` : ` resposta`}
            </p>
            <p>
              Autor: <span>{props.autor}</span>
            </p>
          </DivFlexRow>
        </Content>
      </div>
      <div>
        {props.autor_id === id && (
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              flexWrap: "wrap",
              width: "160px",
            }}
          >
            <Badge
              fun={() => {
                handleEdite(`/question/${props.id}/edit`);
              }}
              variant={ColorButtom.primary}
            >
              <MdCreate />
              <p>Editar</p>
            </Badge>

            <Badge
              disable={props.qtdRespostas > 0}
              variant={ColorButtom.danger}
              fun={() => {
                handleEdite(`/question/${props.id}/delete`);
              }}
            >
              <MdDelete />
              <p>Remover</p>
            </Badge>
          </div>
        )}
      </div>
    </Container>
  );
};

export default ItemQuestion;
