import Header from "../../components/header/index";
import { BodyHome } from "../../styles/home/style";
import { Container } from "../../styles/question/style_newQuestion";

import { Form } from "@unform/web";
import Input from "../../components/input/index";
import Link from "next/link";
import Router from "next/router";

import { useState } from "react";
import Btn from "../../components/button";
import api from "../../Services/api";
import { useAuth } from "../../context/AuthContext";

function postQuestion(titulo: string, user: string) {
  if (titulo === "") return;

  const response = api.post("/questions", {
    titulo,
    autor: user,
    acessos: 0,
  });
  return response;
}

const newQuestion = () => {
  const user = useAuth();

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
              const resp = await postQuestion(dataForm.titulo, user.name);
              if (resp.status == 200) {
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
