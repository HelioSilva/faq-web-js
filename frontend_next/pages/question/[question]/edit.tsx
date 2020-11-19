import Header from "../../../components/header/index";
import { BodyHome } from "../../../styles/home/style";
import { Container } from "../../../styles/question/style_newQuestion";

import { Form } from "@unform/web";
import Input from "../../../components/input/index";
import Link from "next/link";
import Router, { useRouter } from "next/router";

import { useEffect, useState } from "react";
import Btn from "../../../components/button";
import api from "../../../Services/api";
import { useAuth } from "../../../context/AuthContext";

function putQuestion(titulo: string, idQuestion: string | string[]) {
  if (titulo === "") return;

  const response = api.put(`/questions/${idQuestion}`, {
    titulo,
  });
  return response;
}

const newQuestion = () => {
  const [pergunta, setPergunta] = useState("padrao");
  const router = useRouter();
  const { question } = router.query;

  useEffect(() => {
    (async () => {
      const questionData = await api.get(`/questions/${question}`);
      setPergunta(questionData.data.questions[0].titulo);
    })();
  }, []);
  return (
    <div>
      <Header />
      <BodyHome>
        <Container>
          <h3>Editar dúvida</h3>

          <p>
            - Antes de criar um novo tópico, verifique que se não existe outro
            igual.
          </p>
          <p>
            - Todos os tópicos devem iniciar com as palavras: "Como ...", "Qual
            ..."
          </p>

          <Form
            onSubmit={async (dataForm) => {
              const resp = await putQuestion(dataForm.titulo, question);
              if (resp.status == 200) {
                Router.push("/");
              }
            }}
          >
            <Input display={pergunta} name={"titulo"} />
            <Btn primary width={"10%"} value={"Atualizar"} />
            {"  "}
            <Btn primary={false} width={"10%"} value={"Cancelar"} />
          </Form>
        </Container>
      </BodyHome>
    </div>
  );
};

export default newQuestion;
