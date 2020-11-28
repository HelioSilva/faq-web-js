import Container from "../_systemUI/container";

const Footer = () => {
  return (
    <Container flex row wrap height={"50vh"} pAside={"20%"} bgColor={"#313"}>
      <Container
        flex
        height={"150px"}
        bgColor={"#32be1f"}
        order={3}
        itemGrow={12}
        spacing={3}
      >
        <p>Teste1</p>
      </Container>
      <Container
        flex
        bgColor={"#db0606"}
        order={-3}
        basis={"500px"}
        spacing={1}
      >
        <p>Teste2</p>
      </Container>
      <Container flex bgColor={"#661eec"} itemGrow={5} spacing={1}>
        <p>Teste3</p>
      </Container>
      <Container
        flex
        order={-1}
        itemGrow={1}
        spacing={1}
        style={{ background: "#000", color: "#fff" }}
      >
        <p>Teste4</p>
      </Container>
    </Container>
  );
};

export default Footer;
