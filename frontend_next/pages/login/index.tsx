import { Container, Aside, Content } from "../../styles/login/index";
import { Form } from "@unform/web";
import Input from "../../components/input/index";

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
        <Form onSubmit={() => {}}>
          <Input display="Email" name={"email"} />
          <Input display=" Senha" name={"senha"} type="password" />
          <button type="submit">Acessar</button>
        </Form>
      </div>
    </Content>
  </Container>
);

export default Login;
