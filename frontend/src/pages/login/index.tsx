import React from "react";
import ButtonFaq from "../../components/buttons/index";
import {
  ContainerLogin,
  Aside,
  Content,
  FormLogin,
} from "../../components/ContainerLogin";
import logogmail from "../../assets/img/gmail.png";
import WrapperGmail from "../../components/WrapperGmail";

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
              <input type="password" placeholder="Senha" />
            </div>
            <ButtonFaq>Acessar</ButtonFaq>
            <div>
              <hr />
            </div>
            <div>
              <a href="/">Cadastre-se</a>
            </div>
            <WrapperGmail src={logogmail} alt="logo Gmail" />
          </>
        </FormLogin>
      </Content>
    </ContainerLogin>
  );
}

export default Login;
