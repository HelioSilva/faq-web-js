import Header from "../../components/header/index";
import { BodyHome } from "../../styles/home/style";

import { Form } from "@unform/web";
import Input from "../../components/input/index";
import Link from "next/link";
import Router from "next/router";

import { useState } from "react";
import Btn from "../../components/button";
import api from "../../Services/api";
import { useAuth } from "../../context/AuthContext";

function postQuestion(titulo: string, user: string) {
  const response = api.post("/questions", {
    titulo,
    autor: user,
    acessos: 0,
  });
  return response;
}

const newQuestion = () => {
  const user = useAuth();
  const [value, setValue] = useState("");

  return (
    <div>
      <Header />
      <BodyHome>
        <h3>Instruções</h3>
        <ul>
          <li>
            Antes de criar um novo tópico, verifique que se não existe outro
            igual.
          </li>
          <li>
            Todos os tópicos devem iniciar com as palavras: "Como ...", "Qual
            ..."
          </li>
        </ul>
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
      </BodyHome>
    </div>
  );
};

export default newQuestion;
