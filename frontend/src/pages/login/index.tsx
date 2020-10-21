import React from "react";
import {
  ContainerLogin,
  Aside,
  Content,
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
        <div>
          <h1>Login</h1>
        </div>
      </Content>
    </ContainerLogin>
  );
}

export default Login;
