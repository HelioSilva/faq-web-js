import React from "react";
import ButtonFaq from "../../components/buttons/index";
import CenterFaq from "../../components/CenterFaq";
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
        <CenterFaq>
          <FormLogin>
            <h1>Login</h1>
            <div>
              <input placeholder="Email" />
            </div>
            <div>
              <input placeholder="Senha" />
            </div>
            <ButtonFaq>Acessar</ButtonFaq>
            <hr />
            <div>
              <a href="/">Cadastre-se</a>
            </div>
          </FormLogin>
        </CenterFaq>
      </Content>
    </ContainerLogin>
  );
}

export default Login;
