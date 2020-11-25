// const Download = () => <h1>Tela de Download</h1>;

import Container from "../../components/_systemUI/container";

// export default Download;

const dados = {
  nome: "Helio",
  idade: 32,
};

const dados2 = {
  nome: "Helio",
  idade: 32,
  email: "suporte.computek@gmail.com",
};

const withEmailLista = (BaseComponent) => (props) => {
  const base = (
    <>
      <BaseComponent dados={props.dados} />
      {props.dados.email ? <p>{props.dados.email}</p> : null}
    </>
  );

  return base;
};

const withBottom = (BaseComponent) => (props) => (
  <>
    <BaseComponent dados={props.dados} />
    <button>Clique-me</button>
  </>
);

const App = () => {
  const ListaEspecializada = withEmailLista(Lista);
  const ListaComBotao = withBottom(Lista);
  return (
    <Container flex row pAside={"20%"}>
      <Lista dados={dados2} />

      <ListaEspecializada dados={dados2} />

      <ListaComBotao dados={dados2} />
    </Container>
  );
};

const Lista = ({ dados, ...resto }) => (
  <Container flex spacing={1}>
    <p> {" " + dados.nome} </p>
    <p> {" " + dados.idade}</p>
  </Container>
);

export default App;
