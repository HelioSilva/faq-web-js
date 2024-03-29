import {
  Container,
  Aside,
  Content,
  MensagemUser,
} from "../../styles/login/index";
import { Form } from "@unform/web";
import Link from "next/link";
import Router from "next/router";

import { GoogleLogin, GoogleLoginResponse } from "react-google-login";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";

import { TextField } from "unform-material-ui";
import { Button, Typography } from "@material-ui/core";

import Box from "@material-ui/core/Box";

const Login = () => {
  const [mensagem, setMensagem] = useState("");
  const { signIn, name } = useAuth();

  async function requestLogin({ ...dados }) {
    const resp = await signIn(dados);

    if (resp.logged) {
      Router.push("/");
    } else {
      setMensagem("Usuário ou senha inválido");
    }
  }

  return (
    <Container>
      <Aside>
        <div>
          <h2 style={{ fontSize: 32 }}>{process.env.nomedosistema}</h2>
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
            noValidate
            autoComplete={"off"}
            onSubmit={async (dataForm) => {
              await requestLogin(dataForm);
            }}
          >
            <Box paddingY={0}>
              <TextField
                margin="normal"
                required
                name={"email"}
                label="Email"
                fullWidth={true}
              />
              <TextField
                margin="none"
                required
                label="Senha"
                name={"password"}
                type="password"
                fullWidth={true}
              />
            </Box>

            <Button
              style={{ marginTop: 15 }}
              fullWidth={true}
              type="submit"
              color="secondary"
              variant="contained"
            >
              Acessar
            </Button>
          </Form>

          <hr />
          <MensagemUser hasMessage={mensagem !== ""}>{mensagem}</MensagemUser>
          <hr />

          <p>
            <Link href={"/signup"}>
              <Button variant="text">Cadastre-se</Button>
            </Link>
          </p>
          <GoogleLogin
            clientId="816612335723-1gs7rj050q5ir09krrpgp59rpjdjdrv8.apps.googleusercontent.com"
            buttonText="Login com conta Google"
            onSuccess={async (res: GoogleLoginResponse) => {
              if (res) {
                await requestLogin({
                  email: res.profileObj.email,
                  password: res.profileObj.googleId,
                });
              }
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
