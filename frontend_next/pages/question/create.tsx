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
import {
  stateNotification,
  useFunctionsQuestion,
} from "../../context/QuestionContext";

import Menu from "../../components/menu";

const newQuestion = () => {
  const { name, id } = useAuth();
  const { handleNotification } = useFunctionsQuestion();

  const postQuestion = async (
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

    try {
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
    } catch (error) {
      console.log(error);
    }

    return response;
  };

  return (
    <div>
      <Menu />
      <BodyHome>
        <Container
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h3>Instruções</h3>
          <p>
            - Antes de criar um novo tópico, verifique que se não existe outro
            igual.
          </p>
          <p>
            - Todos os tópicos devem iniciar com as palavras: "Como ...", "Qual
            ..."
          </p>

          <Container style={{ width: "70%" }}>
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
        </Container>
      </BodyHome>
    </div>
  );
};

export default newQuestion;
