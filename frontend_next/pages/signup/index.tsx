import {
  Container,
  Aside,
  Content,
  MensagemUser,
} from "../../styles/signup/index";
import { Form } from "@unform/web";
import Input from "../../components/input/index";
import Link from "next/link";
import Router from "next/router";

import api from "../../Services/api";
import React, { useEffect, useState } from "react";
import GoogleLogin, { GoogleLoginResponse } from "react-google-login";

const Login = () => {
  const [mensagem, setMensagem] = useState("");

  async function requestSignup({ ...dados }) {
    const resp = await api.post("/users", {
      email: dados.email,
      password: dados.password,
      name: dados.name,
      url_image: dados.urlImage,
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

          <p>
            <Link href={"/login"}>Login</Link>
          </p>
          <GoogleLogin
            clientId="816612335723-1gs7rj050q5ir09krrpgp59rpjdjdrv8.apps.googleusercontent.com"
            buttonText="Cadastrar-se com conta Google"
            onSuccess={async (res: GoogleLoginResponse) => {
              if (res) {
                await requestSignup({
                  email: res.profileObj.email,
                  name: res.profileObj.name,
                  password: res.profileObj.googleId,
                  urlImage: res.profileObj.imageUrl,
                });
              }
            }}
            onFailure={(res) => {}}
            cookiePolicy={"single_host_origin"}
          />
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
