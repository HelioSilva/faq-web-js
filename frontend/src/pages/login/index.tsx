import React from "react";
import ButtonGmail from "../../components/buttons/ButtonGmail";
import ButtonFaq from "../../components/buttons/index";
import {
  ContainerLogin,
  Aside,
  Content,
  FormLogin,
} from "../../components/ContainerLogin";

function Login() {
  return (
    <ContainerLogin>
      <Aside>
        Computek Comercio e Servicos LTDA
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
        <FormLogin>
          <>
            <h1>Login</h1>
            <div>
              <input placeholder="Email" />
              <input placeholder="Senha" />
            </div>
            <ButtonFaq>Acessar</ButtonFaq>
            <div>
              <hr />
            </div>
            <div>
              <a href="/">Cadastre-se</a>
            </div>
            <ButtonGmail>Acessar com Gmail</ButtonGmail>
          </>
        </FormLogin>
      </Content>
    </ContainerLogin>
  );
}

export default Login;
