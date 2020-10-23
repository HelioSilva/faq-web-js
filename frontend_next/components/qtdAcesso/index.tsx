import { Container } from "./style";

const QtdAcesso = (props) => (
  <Container>
    <h2>{props.qtd}</h2>
    <p>{props.qtd > 1 ? "Acessos" : "Acesso"}</p>
  </Container>
);

export default QtdAcesso;
