import {
  Container,
  Aside,
  Content,
  MensagemUser,
} from "../../styles/login/index";
import { Form } from "@unform/web";
import Input from "../../components/input/index";
import Link from "next/link";
import Router from "next/router";

import api from "../../Services/api";
import { useEffect, useState } from "react";

const Login = () => {
  const [mensagem, setMensagem] = useState("");

  async function requestSignup({ ...dados }) {
    const resp = await api.post("/users", {
      email: dados.email,
      password: dados.password,
      url_image: "",
    });

    if (resp.data.created === true) {
      setMensagem(
        "Cadastro realizado com sucesso, será redirecionado para tela de login"
      );
      setTimeout(() => {
        Router.push("/login");
      }, 3000);
    } else {
      setMensagem(resp.data.message);
    }
  }

  return (
    <Container>
      <Content>
        <div>
          <h2>Formulário de cadastro</h2>

          <Form
            onSubmit={async (d) => {
              console.log(d);
              await requestSignup(d);
            }}
          >
            <Input display="Nome" name={"name"} />
            <Input display="Email" name={"email"} />
            <Input display=" Senha" name={"password"} type="password" />
            <button type="submit">Cadastrar</button>
          </Form>

          <hr />
          <MensagemUser hasMessage={mensagem !== ""}>{mensagem}</MensagemUser>
          <hr />
        </div>
      </Content>
      <Aside>
        <div>
          <h2>Cadastre-se agora</h2>
        </div>
        <div>
          <p>
            Faça seu cadastro e entre nesse ambiente colaborativo, onde você
            poderá compartilhar conhecimento e também encontrar soluções para
            suas dúvidas.
          </p>
        </div>
      </Aside>
    </Container>
  );
};

export default Login;
