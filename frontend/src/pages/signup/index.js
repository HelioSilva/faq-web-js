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

function Signup() {
  return (
    <ContainerLogin>
      <Content style={{ width: "50%" }}>
        <FormLogin>
          <>
            <h2>Formulário de cadastro</h2>
            <div>
              <input placeholder="Nome" />
              <input placeholder="Email" />
              <input type="password" placeholder="Senha" />
            </div>
            <ButtonFaq>Acessar</ButtonFaq>
            <div>
              <hr />
            </div>
            <div>
              <a href="/">Login</a>
            </div>
            <WrapperGmail
              src={logogmail}
              alt="logo Gmail"
              cont="Cadastre-se com conta Google"
            />
          </>
        </FormLogin>
      </Content>
      <Aside style={{ width: "50%" }}>
        Computek Comercio e Servicos LTDA
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
    </ContainerLogin>
  );
}

export default Signup;
