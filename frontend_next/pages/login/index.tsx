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

import {
  GoogleLogin,
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
  GoogleLogout,
} from "react-google-login";
import api from "../../Services/api";
import { useEffect, useState } from "react";

const Login = () => {
  const [mensagem, setMensagem] = useState("");

  async function requestLoginGoogle(dados: GoogleLoginResponse) {
    if (dados as GoogleLoginResponse) {
      const resp = await api.post("/users/login", {
        email: dados.profileObj.email,
        password: dados.profileObj.googleId,
      });

      if (resp.data.acesso) {
        Router.push("/");
      }

      console.log(resp);
    }
  }

  async function requestLogin({ ...dados }) {
    const resp = await api.post("/users/login", {
      email: dados.email,
      password: dados.password,
    });

    if (resp.data.acesso) {
      Router.push("/");
    } else {
      setMensagem(resp.data.message);
    }
  }

  return (
    <Container>
      <Aside>
        <div>
          <h2>FAQweb</h2>
        </div>
        <div>
          <p>
            Faça seu cadastro e entre nesse ambiente colaborativo, onde você
            poderá compartilhar conhecimento e também encontrar soluções para
            suas dúvidas.
          </p>
        </div>
      </Aside>
      <Content>
        <div>
          <h2>Acesso ao Sistema</h2>

          <Form
            onSubmit={async (d) => {
              console.log(d);
              await requestLogin(d);
            }}
          >
            <Input display="Email" name={"email"} />
            <Input display=" Senha" name={"password"} type="password" />
            <button type="submit">Acessar</button>
          </Form>

          <hr />
          <MensagemUser hasMessage={mensagem !== ""}>{mensagem}</MensagemUser>
          <hr />

          <p>
            <Link href={"/signup"}>Cadastre-se</Link>
          </p>
          <GoogleLogin
            clientId="816612335723-1gs7rj050q5ir09krrpgp59rpjdjdrv8.apps.googleusercontent.com"
            buttonText="Login com conta Google"
            onSuccess={(res) => {
              requestLoginGoogle(res as GoogleLoginResponse);
            }}
            onFailure={(res) => {}}
            cookiePolicy={"single_host_origin"}
          />
        </div>
      </Content>
    </Container>
  );
};

export default Login;
