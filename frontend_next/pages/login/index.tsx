import { Container, Aside, Content } from "../../styles/login/index";
import { Form } from "@unform/web";
import Input from "../../components/input/index";
import Link from "next/link";

import { GoogleLogin, GoogleLogout } from "react-google-login";

const Login = () => (
  <Container>
    <Aside>
      <div>
        <h2>FAQweb</h2>
      </div>
      <div>
        <p>
          Faça seu cadastro e entre nesse ambiente colaborativo, onde você
          poderá compartilhar conhecimento e também encontrar soluções para suas
          dúvidas.
        </p>
      </div>
    </Aside>
    <Content>
      <div>
        <h2>Acesso ao Sistema</h2>
        <Form
          onSubmit={(d) => {
            console.log(d);
          }}
        >
          <Input display="Email" name={"email"} />
          <Input display=" Senha" name={"senha"} type="password" />
          <button type="submit">Acessar</button>
        </Form>

        <hr />

        <p>Cadastre-se</p>
        <GoogleLogin
          clientId="816612335723-1gs7rj050q5ir09krrpgp59rpjdjdrv8.apps.googleusercontent.com"
          buttonText="Login com conta Google"
          onSuccess={(res) => {
            console.log(res);
          }}
          onFailure={(res) => {
            console.log(res);
          }}
          cookiePolicy={"single_host_origin"}
        />
        {/* <GoogleLogout
          clientId="816612335723-1gs7rj050q5ir09krrpgp59rpjdjdrv8.apps.googleusercontent.com"
          buttonText="Logout"
          onLogoutSuccess={() => {}}
        ></GoogleLogout> */}
      </div>
    </Content>
  </Container>
);

export default Login;
