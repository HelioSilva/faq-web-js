import Header from "../../components/header/index";
import { BodyHome } from "../../styles/home/style";
import { Container } from "../../styles/question/style_newQuestion";

import { Form } from "@unform/web";
import Input from "../../components/input/index";
import Router from "next/router";

import Btn from "../../components/button";
import api from "../../Services/api";
import { useAuth } from "../../context/AuthContext";
import { AxiosResponse } from "axios";
import { useCallback } from "react";
import { stateNotification, useQuestion } from "../../context/QuestionContext";

const newQuestion = () => {
  const { name, id } = useAuth();
  const { handleNotification } = useQuestion();

  const postQuestion = useCallback(
    async (
      titulo: string,
      username: string,
      userid: string
    ): Promise<AxiosResponse> => {
      if (!titulo || !username || !userid) {
        return;
      }

      const response = await api.post("/questions", {
        titulo,
        autor_id: userid,
        autor: username,
        acessos: 0,
      });

      if (response.status === 200) {
        handleNotification(
          stateNotification.sucess,
          "Questão cadastrada com sucesso!"
        );
      } else {
        handleNotification(
          stateNotification.error,
          "Falha ao cadastrar questão!"
        );
      }

      return response;
    },
    []
  );

  return (
    <div>
      <Header />
      <BodyHome>
        <Container>
          <h3>Instruções</h3>

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
              const resp = await postQuestion(dataForm.titulo, name, id);
              if (resp && resp.status == 200) {
                Router.push("/");
              }
            }}
          >
            <Input display="Dúvida" name={"titulo"} />
            <Btn primary width={"10%"} value={"Cadastrar"} />
          </Form>
        </Container>
      </BodyHome>
    </div>
  );
};

export default newQuestion;
