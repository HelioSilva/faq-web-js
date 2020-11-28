import { Col, Container, Row } from "react-bootstrap";

const Download = () => (
  <Container fluid>
    <Row sm={1}>
      <Col sm={8} style={{ background: "#5ef017" }}>
        <p>OI</p>
      </Col>
      <Col sm={4} style={{ background: "#d8b338" }}>
        <p>OI</p>
      </Col>
    </Row>

    {/* <Row>
      <Col sm={8}>sm=8</Col>
      <Col sm={4}>sm=4</Col>
    </Row>
    <Row>
      <Col sm>sm=true</Col>
      <Col sm>sm=true</Col>
      <Col sm>sm=true</Col>
    </Row> */}
  </Container>
);
export default Download;

// import Container from "../../components/_systemUI/container";

// const dados = {
//   nome: "Helio",
//   idade: 32,
// };

// const dados2 = {
//   nome: "Helio",
//   idade: 32,
//   email: "suporte.computek@gmail.com",
// };

// const withEmailLista = (BaseComponent) => (props) => {
//   const base = (
//     <>
//       <BaseComponent dados={props.dados} />
//       {props.dados.email ? <p>{props.dados.email}</p> : null}
//     </>
//   );

//   return base;
// };

// const withBottom = (BaseComponent) => (props) => (
//   <>
//     <BaseComponent dados={props.dados} />
//     <button>Clique-me</button>
//   </>
// );

// const App = () => {
//   const ListaEspecializada = withEmailLista(Lista);
//   const ListaComBotao = withBottom(Lista);
//   return (
//     <Container flex row flexCenter>
//       <Lista dados={dados2} />

//       <ListaEspecializada dados={dados2} />

//       <ListaComBotao dados={dados2} />
//     </Container>
//   );
// };

// const Lista = ({ dados, ...resto }) => (
//   <Container flex spacing={1}>
//     <p> {" " + dados.nome} </p>
//     <p> {" " + dados.idade}</p>
//   </Container>
// );

// export default App;
